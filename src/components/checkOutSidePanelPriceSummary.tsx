const CheckOutSidePanelPriceSummary = () => {
    return(
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-4">Your Price Summary</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Original Price: <b>LKR 19,025.10</b>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Limited-Time Deal : <b>- LKR 7,610.04</b>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                The length of stay : <b>1 night</b>
              </label>
              <label className="block text-md mt-2 mb-0 font-md font-bold text-gray-700">
                Total Price : <b>LKR 11,415.06</b>
              </label>
            </div>
          </form>
        </div>
    );
}

export default CheckOutSidePanelPriceSummary;