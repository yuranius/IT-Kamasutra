let state = {

    posts: [
        {
            id: 1,
            postview:
                "Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Красота то какая..... Ляпота....",
            postimage:
                "https://www.ridus.ru/images/2015/9/14/324125/7156a2dcaa.jpg",
        },
        {
            id: 2,
            postview:
                "Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Красота то какая..... Ляпота....",
            postimage:
                "https://avatars.mds.yandex.net/i?id=f0370860890eb5fa1d66cb9b16be4214-5869855-images-thumbs&n=13&exp=1",
        },
        {
            id: 3,
            postview: "Красота то какая..... Ляпота....",
            postimage:
                "https://avatars.mds.yandex.net/i?id=370c08515fabb0b019a165ae6934d04a-5704191-images-thumbs&n=13&exp=1",
        },
    ],

    asidePage: {
    contacts: [
        {
            id: 1,
            name: "Vova",
            avatar: "https://avatars.mds.yandex.net/i?id=7379054b2759f4afb429c09a43f43d0f-4237119-images-thumbs&n=13&exp=1",
        },
        {
            id: 2,
            name: "Dmitriy",
            avatar: "https://avatars.mds.yandex.net/i?id=d5ccd6ccfbe34f0be2bd3995ba69c4dd-5653325-images-thumbs&n=13&exp=1",
        },
        {
            id: 3,
            name: "Valentina",
            avatar: "https://phototass2.cdnvideo.ru/width/1200_4ce85301/tass/m2/uploads/i/20210127/5959379.jpg",
        },
        {
            id: 4,
            name: "Mihail",
            avatar: "https://avatars.mds.yandex.net/i?id=f1ac3e1bd2ebb5b558f23397c5e95c29-5888827-images-thumbs&n=13&exp=1",
        },
    ],
    groups: [
        {
            id: 1,
            logo: "WR",
            name: "Wert Rest",
            time: "2 sec",
        },
        {
            id: 2,
            logo: "VR",
            name: "View Restart",
            time: "14 min",
        },
    ],
    }
};

export let addPost = (postView, postImage) => {
    debugger;
    let newPost = {
        id: 5,
        postview:postView,
        postimage:postImage,
    }
    state.posts.push(newPost);
};


export default state;
