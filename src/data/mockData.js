// Mock data cho Threads Clone UI

export const mockUsers = [
  {
    id: 1,
    username: "guitarslayer24",
    displayName: "guitarslayer24",
    avatar: "https://i.pravatar.cc/150?img=1",
    verified: true,
    bio: "I have a lot to give. I just need help.",
  },
  {
    id: 2,
    username: "sieuдептranvien",
    displayName: "sieuдeptranvien",
    avatar: "https://i.pravatar.cc/150?img=2",
    verified: false,
    bio: "Sơn Tùng M-TP fan",
  },
  {
    id: 3,
    username: "quinquinlovely",
    displayName: "quinquinlovely",
    avatar: "https://i.pravatar.cc/150?img=3",
    verified: false,
    bio: "Fashion lover",
  },
  {
    id: 4,
    username: "pvkhali",
    displayName: "pvkhali",
    avatar: "https://i.pravatar.cc/150?img=4",
    verified: false,
    bio: "",
  },
];

export const mockPosts = [
  {
    id: 1,
    userId: 1,
    content: "I have a lot to give. I just need help.",
    timestamp: "4h",
    likes: 7,
    comments: 0,
    reposts: 2,
    shares: 0,
    images: [],
    hasTranslate: false,
    replies: [],
  },
  {
    id: 2,
    userId: 2,
    content:
      "Bác sao Sơn Tùng đều nói tiếng và thành công đến vậy hoá ra được tổ chức Illuminati chống lưng bảo kê và liên quan tới lạm tay chân cho quỷ xa tảnh. Sự thật đã lộ rõ Illuminati can thiệp vào bảo chi VN để công kích Jack và thao túng mọi người chống lại người phê thiên đường bảo vệ loài người và diệt trừ quỷ dữ.",
    timestamp: "19h",
    likes: 48,
    comments: 19,
    reposts: 3,
    shares: 0,
    images: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
    ],
    hasTranslate: true,
    replies: [
      {
        id: 21,
        userId: 4,
        content: "Add a topic\nReply to sieuдeptranvien...",
        timestamp: "18h",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    content:
      "Bức ảnh nói lên sự khác biệt của tư thế :))\n\nOutfit cô đơn giản nhưng lùng thằng cũng đủ toát lên thần thái rồi 😬😬",
    timestamp: "23h",
    likes: 0,
    comments: 0,
    reposts: 0,
    shares: 0,
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
    ],
    hasTranslate: true,
    replies: [],
  },
];

export const mockUser = mockUsers[0]; // Current logged in user

// Helper function để lấy user info từ userId
export const getUserById = (userId) => {
  return mockUsers.find((user) => user.id === userId);
};

// Helper function để lấy posts với user info
export const getPostsWithUserInfo = () => {
  return mockPosts.map((post) => ({
    ...post,
    user: getUserById(post.userId),
    replies: post.replies.map((reply) => ({
      ...reply,
      user: getUserById(reply.userId),
    })),
  }));
};
