import { useEffect, useState } from "react";
import { useParams, useLocation,useNavigate } from "react-router-dom";
import Api from "../../service/Api";
import Loader from "../components/Loader";
import { Link, NavLink } from 'react-router-dom';

export default function Referral() {

  const location = useLocation();
  const navigate = useNavigate();
  const { lvl } = useParams();
  const [level, setLevel] = useState([]);

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(7);
  const [total, setTotal] = useState(0);
  const [maxLength, setMaxLength] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, [search, page]); // जब भी search या page बदले, डेटा लोड करें

  const loadUsers = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(location.search);
      const level = queryParams.get("selected_level");
      setSelectedLevel(level);

      const response = await Api.get("/list", {
        params: { selected_level: level || 0, search, page, limit },
      });
      console.log('response:',response);
      if (response.data.status) {
        setUsers(response.data.direct_team);
        setTotal(response.data.total);
        setMaxLength(response.data.max_length);
        
      }
    } catch (error) {
      console.error("❌ Error fetching users:", error);
    }
    setLoading(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get formatted parts
    const dayName = date.toLocaleString('en-US', { weekday: 'short' }); // Thu
    const monthName = date.toLocaleString('en-US', { month: 'short' }); // Feb
    const day = String(date.getDate()).padStart(2, '0'); // 20
    const year = date.getFullYear(); // 2025

    return `${dayName} ${monthName} ${day} ${year}`;
};


// Output: "Thu Feb 20 2025 00:00:00"


  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1); // जब search करे तो पहले पेज पर जाए
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(total / limit)) {
      setPage(newPage);
    }
  };

  const levels = [];

    for (let i = 1; i <= maxLength; i++) {
      levels.push(i);
    }

  if (loading) {
    return <Loader />;
  }

  const handleLevelClick = (selectedLevel) => {
    navigate(`/team-list?selected_level=${selectedLevel}`);
   
    window.location.reload();  // Page reload force karega
  };


  return (
    <div>
    <div
      class="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white"
    >
      <div
        class="w-[582px] h-[582px] rounded-full bg-g3001 absolute -top-32 -left-20 blur-[575px]"
      ></div>
      <div class="px-6 py-8 relative z-20 w-full" >
        <div class="flex justify-start items-center pb-8 mr-8">
          <Link to="/security/refferals-user"
            
            class="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i class="ph-bold ph-caret-left"></i>
          </Link >
          <div class="flex justify-center items-center w-full">
            <h1 class="font-semibold text-2xl">Team</h1>
          </div>
        </div>


        <ul class="flex justify-start items-center gap-3 overflow-y-auto pt-4 vertical-scrollbar pb-3 browserCategory">
        <li className="item active">
  <a href="/team-list">All <i className="ph ph-caret-right"></i></a>
</li>          {levels.map((level) => (
            <li key={level} className="item" onClick={() => handleLevelClick(level)} style={{color:'#000'}}>
              Level {level}
            </li>
          ))}   
        </ul>
        <div
          class="flex justify-between items-center gap-4 bg-white3 bg-opacity-5 rounded-lg py-3 px-4" style={{backgroundColor:'#fff'}}
        >
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search..."
            class="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
          />
          <div class="">
            <i class="ph ph-magnifying-glass text-g300 text-xl" style={{backgroundColor:'#fff',color:'#000'}}></i>
          </div>
        </div>

        <div class="flex flex-col gap-2 pt-5">
         {users.length > 0 ?(
            users.map((user, index) => (
              <>
              <div
                class="flex justify-between items-center  bg-opacity-5 p-4 rounded-xl" style={{backgroundColor:'#fff'}}
              key={index}>
                <div class="flex justify-start items-center gap-2">
                  <p class="text-sm text-n70">LvL {user.level}</p>
                  <div
                    class="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white3 bg-opacity-5"
                  >
              {/* <i className="ph ph-user text-2xl"></i> */}
              <img  src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg"  />
              </div>
                  <p class="font-semibold" style={{color:'#000'}}>{user.fullname}</p>
                  
                </div>
                <div class="flex flex-col justify-end items-end">
                <p class="font-semibold flex items-center gap-2 justify-start">
      {/* <img src="\assets/images/ok3d.png" class="w-6 h-6" style={{width: '27px'}}/> */}
      <span style={{color:'#000'}}>{Number(user.package ?? 0).toFixed(2)}</span>
    </p>
                  <p class="text-sm">{formatDate(user.created_at)}</p>
                </div>
              </div>
              
             </>
            ))
         ): (<div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          textAlign: 'center'
        }}>
          <img 
            src="\assets\images\empty_state.svg" 
            alt="empty" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginBottom: '20px'
            }} 
          />
          <p style={{ fontSize: '16px', color: '#101014' }}>No users found.</p>
        </div>
        )}
        
        
        
        </div>

        <div className="flex justify-center items-center gap-4 mt-6">
               <button
                 className="px-4 py-2 bg-g300 text-black rounded-md"
                 disabled={page === 1}
                 onClick={() => handlePageChange(page - 1)}
               >
                 &lt;&lt;
               </button>
               
               <span className="text-black">{page} / {Math.ceil(total / limit)}</span>
 
               
               <button
                 className="px-4 py-2 bg-g300 text-black rounded-md"
                 disabled={page >= Math.ceil(total / limit)}
                 onClick={() => handlePageChange(page + 1)}
               >
                 &gt;&gt;
               </button>
             </div>
       





      </div>
    </div>
    </div>
  )
}