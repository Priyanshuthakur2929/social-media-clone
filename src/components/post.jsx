import { useState } from "react";

const Post = ({ post }) => {
    const [showImageModal, setShowImageModal] = useState(false);

    const openImageModal = () => {
        setShowImageModal(true);
    };

    const closeImageModal = () => {
        setShowImageModal(false);
    };

    return (
        <>
            <div className="card" style={{ width: "18rem", marginBottom: "20px" }}>
                <img 
                    src={post.image} 
                    className="card-img-top" 
                    alt={post.title}
                    style={{ cursor: "pointer", height: "200px", objectFit: "cover" }}
                    onClick={openImageModal}
                    title="Click to view full image"
                ></img>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    
                    {/* Post ID */}
                    <div style={{ fontSize: "12px", color: "#666", marginBottom: "10px" }}>
                        <strong>Post ID:</strong> {post.id}
                    </div>

                    {/* Reactions Section */}
                    <div style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
                        <strong>Reactions:</strong>
                        <div style={{ marginTop: "5px" }}>
                            👍 {post.reactions.likes} people liked this
                        </div>
                    </div>

                    {/* Users Who Reacted */}
                    <div style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#e8f4f8", borderRadius: "5px", fontSize: "12px" }}>
                        <strong>Reacted Users:</strong>
                        <div style={{ marginTop: "5px" }}>
                            {post.reactions.userIds.map((userId) => (
                                <span key={userId} style={{ display: "inline-block", marginRight: "8px", backgroundColor: "#007bff", color: "white", padding: "2px 6px", borderRadius: "3px" }}>
                                    User {userId}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={openImageModal} 
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                    >
                        View Full Image
                    </button>
                </div>
            </div>

            {/* Image Modal */}
            {showImageModal && (
                <div 
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000
                    }}
                    onClick={closeImageModal}
                >
                    <div 
                        style={{
                            position: "relative",
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            maxWidth: "90%",
                            maxHeight: "90%"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeImageModal}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                backgroundColor: "#dc3545",
                                color: "white",
                                border: "none",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                fontSize: "20px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            ×
                        </button>
                        <img 
                            src={post.image} 
                            alt={post.title}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "80vh",
                                objectFit: "contain"
                            }}
                        ></img>
                        <div style={{ marginTop: "15px", textAlign: "center" }}>
                            <h5>{post.title}</h5>
                            <p>{post.content}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
} 
export default Post;