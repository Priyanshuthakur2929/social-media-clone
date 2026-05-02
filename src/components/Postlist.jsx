import Post from "./post";

const Postlist= () =>{
    const posts = [
        {
            id: 1,
            title: "First Post",
            content: "This is my first post on the platform.",
            image: "https://images.unsplash.com/photo-1774248833635-1e0aa8c7c864?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
            reactions: {
                likes: 15,
                userIds: [101, 102, 103, 104, 105,"+more"]
            }
        },
        {
            id: 2,
            title: "Second Post",
            content: "Enjoying the concert last night!",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500",
            reactions: {
                likes: 8,
                userIds: [106, 107, 108,"+more"]
            }
        },
        {
            id: 3,
            title: "Third Post",
            content: "One of my Favourite Hobbie",
            image: "https://images.unsplash.com/photo-1773332585771-5c9c5fa642d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
            reactions: {
                likes: 22,
                userIds: [101, 109, 110, 111, 112, 113, "+more"]
            }
        }
    ];

    return(
        <div className="postlist-container">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
} 
export default Postlist;