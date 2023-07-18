'use client'
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { setContent, setTitle } from "@/redux/features/postSlice"
import Container from "@/components/Container"

export default function Home() {

  const dispatch = useAppDispatch()
  const { title, content } = useAppSelector((state) => state.post)

  return (
    <Container>
      <h2 className="mb-8">Site content goes here</h2>
      <div className="p-4 border">
        <h3 className="pb-2 text-2xl font-bold">Redux Test </h3>
        <div className="flex flex-col mb-4">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" onChange={(e) => dispatch(setTitle(e.target.value))} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content">Content</label>
          <input id="content" type="text" onChange={(e) => dispatch(setContent(e.target.value))} />
        </div>
        <br></br>
        <h3 className="pb-2">State : </h3>
        <hr></hr>
        <p className="mt-2">title : {title}</p>
        <p>content : {content}</p>
      </div>
    </Container>
  )
}
