// Perfil profesional en inglés
let devProfile = {
    fullName: "Lisandra Schäffer",
    age: 29,
    profession: "Full Stack Developer",
    skills: ["JavaScript", "Git", "Node.js", "GitHub"],
    isEmployed: false,
    contact: {
      email: "lisandraschaffer234@gmail.com",
      location: "Andresito,Misiones,Argentina"
    }
  };
  
  function introduce(profile) {
    let jobStatus = profile.isEmployed ? "I am currently unemployed." : "I am currently looking for opportunities.";
    return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. I work with ${profile.skills.join(", ")}. I live in ${profile.contact.location}. I am ${profile.age} years old. ${jobStatus} You can contact me at ${profile.contact.email}.`;
  }
  
  console.log(introduce(devProfile));