import { useState } from "react";
import { Link } from "react-router-dom";

const CustomNetwork = () => {
  const [formData, setFormData] = useState({
    chainId: "",
    networkName: "",
    rpcUrl: "",
    currencySymbol: "",
    blockExplorerUrl: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container bg-n900 min-h-screen relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        {/* Header */}
        <div className="flex justify-start items-center pb-8 mr-8">
          <Link
            to="/account"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Custom Network</h1>
          </div>
        </div>

        <p className="text-sm text-n70">
          Stay connected, follow teams, and never miss thrilling moments.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Chain ID */}
          <div className="pt-5">
            <p className="text-sm font-semibold pb-2">Chain ID</p>
            <div className="p-4 bg-white bg-opacity-5 rounded-xl">
              <input
                type="text"
                name="chainId"
                value={formData.chainId}
                onChange={handleChange}
                className="outline-none text-sm text-n70 placeholder:text-n70 bg-transparent w-full"
                placeholder="Enter Chain ID"
              />
            </div>
            <p className="text-xs text-n70 pt-2">
              I understand that DeSquid cannot recover this password for me.
              Learn more.
            </p>
          </div>

          {/* Network Name */}
          <div className="pt-5">
            <p className="text-sm font-semibold pb-2">Network Name</p>
            <div className="p-4 bg-white bg-opacity-5 rounded-xl">
              <input
                type="text"
                name="networkName"
                value={formData.networkName}
                onChange={handleChange}
                className="outline-none text-sm text-n70 placeholder:text-n70 bg-transparent w-full"
                placeholder="Enter Network Name"
              />
            </div>
          </div>

          {/* New RPC URL */}
          <div className="pt-5">
            <p className="text-sm font-semibold pb-2">New RPC URL</p>
            <div className="p-4 bg-white bg-opacity-5 rounded-xl">
              <input
                type="text"
                name="rpcUrl"
                value={formData.rpcUrl}
                onChange={handleChange}
                className="outline-none text-sm text-n70 placeholder:text-n70 bg-transparent w-full"
                placeholder="Enter RPC URL"
              />
            </div>
          </div>

          {/* Currency Symbol */}
          <div className="pt-5">
            <p className="text-sm font-semibold pb-2">Currency Symbol</p>
            <div className="p-4 bg-white bg-opacity-5 rounded-xl">
              <input
                type="text"
                name="currencySymbol"
                value={formData.currencySymbol}
                onChange={handleChange}
                className="outline-none text-sm text-n70 placeholder:text-n70 bg-transparent w-full"
                placeholder="Enter Currency Symbol"
              />
            </div>
            <p className="text-xs text-n70 pt-2">
              Max currency symbol is 10 characters.
            </p>
          </div>

          {/* Block Explorer URL */}
          <div className="pt-5">
            <p className="text-sm font-semibold pb-2">
              Block explorer URL (optional)
            </p>
            <div className="p-4 bg-white bg-opacity-5 rounded-xl">
              <input
                type="text"
                name="blockExplorerUrl"
                value={formData.blockExplorerUrl}
                onChange={handleChange}
                className="outline-none text-sm text-n70 placeholder:text-n70 bg-transparent w-full"
                placeholder="Enter Block Explorer URL"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex justify-start items-start gap-3 pt-8">
            <input
              id="check"
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="check" className="cursor-pointer">
              I understand that DeSquid cannot recover this password for me.
              Learn more.
            </label>
          </div>

          {/* Submit Button */}
          <div className="w-full pt-10">
            <button
              type="submit"
              className="block bg-g300 font-semibold text-center py-3 rounded-lg w-full"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomNetwork;
