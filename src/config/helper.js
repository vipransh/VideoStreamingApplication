
const nameList= [
    "Aarav","Aishwarya","Akshay","Anaya","Anika","Arjun","Avni","Devika","Diya","Harshita",
    "Ishaan","Jiya","Kabir","Kavya","Kiara","Krish","Lavanya","Mahi","Manvi","Niharika","Nirav","Prisha","Rahul",
    "Riya","Rohan","Samaira","Sanjay","Saanvi","Shreya","Siddharth","Simran","Tanya","Tanishq","Trisha","Urvi","Ved",
    "Vidya","Vihaan","Yash","Yuvika","Zara","Zoya","Arnav","Advait","Ananya","Dhruv",
    "Ishita","Kritika","Riyaan","Saisha"
  ];

export function generateName() {
        return nameList[Math.floor(Math.random() * nameList.length)];
 };

 const chatMessages = [
    "Hey, great video!",
    "What camera are you using?",
    "Can you recommend any good editing software?",
    "I'm from India. Hello, everyone!",
    "Where are you streaming from?",
    "Love your content!",
    "Can you do a tutorial on that?",
    "What's the name of the song playing in the background?",
    "Greetings from Brazil!",
    "What's your favorite part of making videos?",
    "Do you have any tips for growing a YouTube channel?",
    "This is so helpful. Thank you!",
    "What microphone are you using?",
    "Can you shout out my channel?",
    "You inspire me to start my own channel.",
    "What's the most challenging part of being a content creator?",
    "Hello from Germany!",
    "I've been binge-watching your videos all day.",
    "Can you do a collaboration with another YouTuber?",
    "What's your favorite video you've ever made?",
    "Do you have any merch available?",
    "What's the secret to your success?",
    "Can you make a video on this topic?",
    "Sending love from Canada!",
    "I've learned so much from your channel.",
    "What editing software do you recommend for beginners?",
    "What's your favorite video game?",
    "Greetings from Italy!",
    "How long does it take you to edit your videos?",
    "What inspired you to start a YouTube channel?",
    "Can you do a live Q&A session?",
    "Your videos always make me laugh.",
    "What's your favorite part about live streaming?",
    "Do you have any upcoming projects or videos?",
    "Can you share some behind-the-scenes footage?",
    "Hello from Australia!",
    "What's your favorite video that someone else has made?",
    "I'm thinking of starting a channel. Any tips for beginners?",
    "You deserve more subscribers!",
    "What's the most rewarding part of being a content creator?",
    "Can you give a shoutout to my friend?",
    "I love your channel's intro!",
    "Greetings from France!",
    "What's the biggest lesson you've learned from YouTube?",
    "Can you make a video on this specific topic?",
    "How do you come up with video ideas?",
    "Sending greetings from Japan!",
    "Your videos have helped me through tough times.",
    "What's your favorite video editing technique?",
    "Love from Jupiter",
    "I appreciate your hard work and dedication."
  ];
  
export function generateMessage() {
    return chatMessages[Math.floor(Math.random() * chatMessages.length)];
};