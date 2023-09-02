const CheckOutSidePanelBookingDetails = () => {
    return(
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-4">Your Booking Details</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Check-in : <b>Sun 20 Aug 2023</b>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Check-out : <b>Mon 21 Aug 2023</b>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                The length of stay : <b>1 night</b>
              </label>
              {/* <div className="mt-1">
                <label className="inline-flex items-center">
                  
                </label>
              </div> */}
            </div>
          </form>
        </div>
    );

}

export default CheckOutSidePanelBookingDetails