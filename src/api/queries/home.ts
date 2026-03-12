// Dummy hook to preview WhatDoesPansaaDo component

const dummyData = {
  data: {
    section_4: {
      heading: "What does <span style='color:#F4A460'>Pansaa</span> do?",
      description: "We help businesses grow through strategy, design, and technology.",
      what_pansaa_does: [
        {
          logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
          title: "Brand Strategy",
          description:
            "We craft compelling brand identities that resonate with your audience and set you apart from the competition.",
        },
        {
          logo: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
          title: "UI/UX Design",
          description:
            "Our designers create intuitive, beautiful interfaces that delight users and drive engagement across every touchpoint.",
        },
        {
          logo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
          title: "Web Development",
          description:
            "We build fast, scalable web applications using modern technologies tailored to your business needs.",
        },
        {
          logo: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
          title: "Mobile Apps",
          description:
            "From iOS to Android, we deliver polished mobile experiences that keep your users coming back.",
        },
        {
          logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          title: "Growth Marketing",
          description:
            "Data-driven marketing strategies that attract the right customers and turn them into loyal advocates.",
        },
      ],
    },
  },
};

export function useHome() {
  return { data: dummyData };
}
