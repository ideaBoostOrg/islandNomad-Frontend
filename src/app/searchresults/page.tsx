'use client'
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { setContent, setTitle } from "@/redux/features/postSlice"
import Container from "@/components/Container"
import SearchBar from "@/components/searchBar"
import ReservationDetailCard from "@/components/reservationDetailCard"
import FilterCard from "@/components/filterCard"
import FilterGroupPrice from "@/components/filterGroupPrice"

export default function Home() {

  const dispatch = useAppDispatch()
  const { title, content } = useAppSelector((state) => state.post)
  const checkBoxDetails1 = [
    { label: '5 stars', value: '116', checked: true },
    { label: 'Free cancellation', value: '76', checked: true },
  ];
  const checkBoxDetails2 = [
    { label: 'No prepayment', value: '221', checked: true },
    { label: '5 stars', value: '116', checked: true },
    { label: 'Book without credit card', value: '76', checked: true },
    { label: 'Free cancellation', value: '96', checked: true },
  ];
  const checkBoxDetail3 = [
    { label: '1 star', value: '21', checked: true },
    { label: '2 stars', value: '16', checked: true },
    { label: '3 star', value: '76', checked: true },
    { label: '4 star', value: '96', checked: true },
    { label: '5 star', value: '96', checked: true },
    { label: 'Unrated', value: '96', checked: true },
  ];
  const checkBoxDetail4 = [
    { label: 'Parking', value: '221', checked: true },
    { label: 'Free WiFi', value: '116', checked: true },
  ];

  return (
    <Container>
      <SearchBar />
      <div className="flex flex-row">
        <div className="w-1/3">
          <div>map here</div>
          <div>
            <h2 className="font-bold mt-4 border-2 rounded-t-lg p-2">Filter by:</h2>
            <FilterCard
              headingGroupName="Your Previous Filters"
              checkBoxDetails={checkBoxDetails1}
            />
            <FilterGroupPrice />
            <FilterCard
              headingGroupName="Popular Filters"
              checkBoxDetails={checkBoxDetails2}
            />
            <FilterCard
              headingGroupName="Property rating"
              checkBoxDetails={checkBoxDetail3}
            />
            <FilterCard
              headingGroupName="Facilities"
              checkBoxDetails={checkBoxDetail4}
            />
          </div>
        </div>
        <div className="w-full ml-5">
          {Array.from({ length: 5 }, (_, index) => (
            <>
              <ReservationDetailCard />
            </>
          ))}
        </div>
      </div>
    </Container>
  )
}
