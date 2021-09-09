import { useState } from "react";

// Data looks like this (for backend)
// console.log({
//     title:'string',
//     body:'string',
//     isDraft:boolean
// })
let backend = process.env.REACT_APP_BACKEND;
let endpoint = `${backend}/api/createPost`;
function AdminPostCreation() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isDraft, setIsDraft] = useState(true);

  const handleSubmit = async (e) => {
    // we might want to go to the next page to see the published post (have to verify this)
    e.preventDefault();
    // Question: Do we need form validation here for Leon?
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          isDraft,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      {/* Title Section */}
      <section className="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </section>

      {/* Body Text Section */}
      <section className="">
        <label htmlFor="body">Body of Post</label>
        <textarea
          type="textarea"
          name="body"
          placeholder="Body Info"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </section>

      {/* Publish and Submit Section */}
      <section className="">
        <label htmlFor="isDraft">Is Draft?</label>
        <input
          type="checkbox"
          name="isDraft"
          checked={isDraft}
          value={isDraft}
          onChange={(e) => setIsDraft(e.currentTarget.checked)}
        />
        {/* Change button element to component once avail. */}
        <button className="btn" type="submit">
          Submit
        </button>
      </section>
    </form>
  );
}

export default AdminPostCreation;
