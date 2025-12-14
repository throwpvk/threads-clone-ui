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
  {
    id: 4,
    userId: 1,
    content: "This is amazing! Check out this thread about music 🎸",
    timestamp: "2h",
    likes: 15,
    comments: 3,
    reposts: 5,
    shares: 2,
    hasTranslate: false,
    // Quote/Repost - post bên trong post
    quotedPost: {
      id: 1,
      userId: 2,
      user: {
        username: "sieuдeptranvien",
        avatar: "https://i.pravatar.cc/150?img=2",
        verified: false,
      },
      content:
        "Just finished recording my new album! Can't wait to share it with you all 🎵✨",
      timestamp: "5h",
      images: [
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600",
      ],
    },
    replies: [],
  },
];

export const mockUser = mockUsers[0]; // Current logged in user

// Search mock data
export const mockTrending = [
  {
    id: "t1",
    name: "Snow Man ミューバン",
    content: "fluneco あの\n今日誕生日なんです……",
  },
  {
    id: "t2",
    name: "THE W",
    content:
      "nkmr_santa_5011 THE Wの粗品の審査より、今回一番的確だった審査員のコメントは、笑い飯哲夫の『何をやっているのか私にはわからなかった』だったと思う。",
  },
  {
    id: "t3",
    name: "梨花とタキマキのコラボ",
    content:
      "ricecakecampany15 梨花とタキマキのYouTube\n日頃からいろんなことを考えて…",
  },
  {
    id: "t4",
    name: "50TAのキングリハへの楽曲提供",
    content: "...",
  },
  {
    id: "t5",
    name: "体格ブラザーズ大好きです",
    content:
      "cha_tomaru22 そろそろ体格ブラザーズに関わ呼ばれへんかな…\nシューイチスタッフさん、もうカタィに気づいてるよね？笑🤡",
  },
];

export const mockFollowSuggestions = [
  {
    id: "fs1",
    username: "dasio_reviewer",
    displayName: "dasio_reviewer",
    avatar: "https://i.pravatar.cc/150?img=11",
    description: "다이소 리뷰에해직지끈텍스개",
    content:
      "다이소 현직 직원이야 😎😎\n핫템들만 바로 소개해줄게 🎁\n(공식, 객관적소개, 광고x)",
    followersCount: 20100,
    isVerified: false,
  },
  {
    id: "fs2",
    username: "junvu95",
    displayName: "junvu95",
    avatar: "https://i.pravatar.cc/150?img=12",
    description: "JUN VŨ 준부 ㅋㅋㅋ",
    content: "Jun Vũ nghĩa là mua tháng sau 💬",
    followersCount: 212000,
    isVerified: true,
  },
  {
    id: "fs3",
    username: "buitra.05",
    displayName: "buitra.05",
    avatar: "https://i.pravatar.cc/150?img=13",
    description: "Bùi Trà",
    content: "hi",
    followersCount: 8387,
    isVerified: false,
  },
  {
    id: "fs4",
    username: "biettheeodlam",
    displayName: "biettheeodlam",
    avatar: "https://i.pravatar.cc/150?img=14",
    description: "Biết thế éo đi làm",
    content:
      "Chúng tôi không khuyến khích nghỉ làm, chỉ là góc nhìn hài hước...\nKênh trực thuộc Biết Thế Network - Orange Agency.\nLiên hệ Zalo: 089 989 9797",
    followersCount: 44400,
    isVerified: false,
  },
];

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
