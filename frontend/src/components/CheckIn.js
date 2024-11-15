// src/components/CheckIn.js
//import React, { useState } from 'react';

// function CheckIn() {
//   const [mood, setMood] = useState(5);
//   const [energy, setEnergy] = useState(5);
//   const [stress, setStress] = useState(5);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ mood, energy, stress });
//     alert('Check-In Submitted');
//   };

//   return (
//     <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Daily Check-In</h2>
//       <form onSubmit={handleSubmit}>
//         <label className="block text-gray-700">Mood</label>
//         <input type="range" min="1" max="10" value={mood} onChange={(e) => setMood(e.target.value)} className="mb-4 w-full" />
//         <label className="block text-gray-700">Energy</label>
//         <input type="range" min="1" max="10" value={energy} onChange={(e) => setEnergy(e.target.value)} className="mb-4 w-full" />
//         <label className="block text-gray-700">Stress</label>
//         <input type="range" min="1" max="10" value={stress} onChange={(e) => setStress(e.target.value)} className="mb-4 w-full" />
//         <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">Submit Check-In</button>
//       </form>
//     </div>
//   );
// }

// export default CheckIn;

// src/components/CheckIn.js
// import React, { useState } from 'react';

// function CheckIn() {
//     const [mood, setMood] = useState(5);
//     const [energy, setEnergy] = useState(5);
//     const [stress, setStress] = useState(5);
//     const [selectedEmotions, setSelectedEmotions] = useState([]);
//     const [reflection, setReflection] = useState('');

//     const emojiMap = {
//       1: "😔", 2: "😟", 3: "😕", 4: "🙁", 5: "😐", 6: "🙂", 7: "😊", 8: "😁", 9: "😃", 10: "😄"
//     };

//     const emotions = ['Stressed', 'Relaxed', 'Hopeful', 'Anxious', 'Happy', 'Sad', 'Excited'];

//     const handleEmotionChange = (e) => {
//       const value = e.target.value;
//       setSelectedEmotions((prev) => 
//         prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
//       );
//     };

//     const handleReflectionChange = (e) => setReflection(e.target.value);

//     const generateResponse = () => {
//       let response = '';
//       if (mood <= 4 && selectedEmotions.includes('Stressed')) {
//         response = 'It looks like you’re feeling stressed. Try some mindfulness or relaxation exercises.';
//       } else if (mood >= 7 && selectedEmotions.includes('Happy')) {
//         response = 'Great to see you feeling happy! Keep up the positive energy!';
//       } else {
//         response = 'It seems like you’re in between. Maybe take a break and reflect for a while.';
//       }
//       return response;
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log({ mood, energy, stress, selectedEmotions, reflection });
//       alert(`Check-In Submitted: ${generateResponse()}`);
//     };

//     return (
//       <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Daily Check-In</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Mood Rating */}
//           <label className="block text-gray-700">Mood</label>
//           <input 
//             type="range" 
//             min="1" 
//             max="10" 
//             value={mood} 
//             onChange={(e) => setMood(e.target.value)} 
//             className="mb-4 w-full" 
//           />
//           <div className="text-center">{emojiMap[mood]}</div>

//           {/* Energy Rating */}
//           <label className="block text-gray-700">Energy</label>
//           <input 
//             type="range" 
//             min="1" 
//             max="10" 
//             value={energy} 
//             onChange={(e) => setEnergy(e.target.value)} 
//             className="mb-4 w-full" 
//           />

//           {/* Stress Rating */}
//           <label className="block text-gray-700">Stress</label>
//           <input 
//             type="range" 
//             min="1" 
//             max="10" 
//             value={stress} 
//             onChange={(e) => setStress(e.target.value)} 
//             className="mb-4 w-full" 
//           />

//           {/* Emotion Word Cloud */}
//           <label className="block text-gray-700 mt-4">Select your emotions</label>
//           {emotions.map((emotion) => (
//             <label key={emotion} className="inline-block mr-4">
//               <input 
//                 type="checkbox" 
//                 value={emotion} 
//                 onChange={handleEmotionChange} 
//                 className="mr-2" 
//               />
//               {emotion}
//             </label>
//           ))}

//           {/* Daily Reflection Prompt */}
//           <label className="block text-gray-700 mt-4">Daily Reflection</label>
//           <textarea 
//             value={reflection} 
//             onChange={handleReflectionChange} 
//             className="w-full p-2 border rounded mt-2" 
//             placeholder="What's on your mind?"
//           />

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded mt-4"
//           >
//             Submit Check-In
//           </button>
//         </form>
//       </div>
//     );
// }

// export default CheckIn;

// src/components/CheckIn.js
import React, { useState } from 'react';

function CheckIn() {
  const [mood, setMood] = useState(null);
  const [energy, setEnergy] = useState(null);
  const [stress, setStress] = useState(null);
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [reflection, setReflection] = useState('');
  const [response, setResponse] = useState('');

  const emojiMap = {
    mood: ['😔', '😐', '🙂', '😁', '😄'],
    energy: ['😴', '😐', '🙂', '💪', '⚡'],
    stress: ['😩', '😞', '😐', '🙂', '😎'],
  };

  const emotions = ['Stressed', 'Relaxed', 'Hopeful', 'Anxious', 'Happy', 'Sad', 'Excited'];

  const handleEmotionChange = (e) => {
    const value = e.target.value;
    setSelectedEmotions((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleReflectionChange = (e) => setReflection(e.target.value);

  const generateResponse = () => {
    let responseMessage = '';

    // Mood-based response
    if (mood === 0) {
      responseMessage = 'You seem a bit down. Remember, tough times don’t last, but tough people do. 💪';
    } else if (mood === 4) {
      responseMessage = 'You seem to be in high spirits! Keep riding that positive wave. 🌊😄';
    } else {
      responseMessage = 'You’re somewhere in the middle! Take a break if you need to recharge. ⚡';
    }

    // Energy-based response
    if (energy === 0) {
      responseMessage += ' It looks like you’re feeling tired. Make sure to rest and rejuvenate. 💤';
    } else if (energy === 4) {
      responseMessage += ' Wow! Full of energy! Make the most of it and keep up the great work. ⚡';
    }

    // Stress-based response
    if (stress === 0) {
      responseMessage += ' It seems like stress is on your mind. Try some relaxation techniques to unwind. 😌';
    } else if (stress === 4) {
      responseMessage += ' You’re feeling relaxed and stress-free—keep this peaceful vibe going! 😎';
    }

    // Emotion-based response
    if (selectedEmotions.includes('Stressed')) {
      responseMessage += ' You might be feeling stressed. Try to focus on deep breathing exercises. 🌿';
    }
    if (selectedEmotions.includes('Happy')) {
      responseMessage += ' It’s amazing to see you happy! Keep embracing the positive energy. ✨';
    }

    return responseMessage;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(generateResponse());
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center">Daily Check-In</h2>
      
      {/* Check-In Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mood Selection */}
        <div>
          <label className="block text-lg mb-2">How are you feeling today?</label>
          <div className="flex justify-between">
            {emojiMap.mood.map((emoji, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setMood(index)}
                className={`text-5xl p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  mood === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-transparent text-gray-300 hover:bg-blue-700'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Energy Level */}
        <div>
          <label className="block text-lg mb-2">How energetic do you feel?</label>
          <div className="flex justify-between">
            {emojiMap.energy.map((emoji, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setEnergy(index)}
                className={`text-5xl p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  energy === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-transparent text-gray-300 hover:bg-blue-700'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Stress Level */}
        <div>
          <label className="block text-lg mb-2">How stressed are you?</label>
          <div className="flex justify-between">
            {emojiMap.stress.map((emoji, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setStress(index)}
                className={`text-5xl p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  stress === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-transparent text-gray-300 hover:bg-blue-700'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Emotion Word Cloud */}
        <div>
          <label className="block text-lg mb-2">Select your emotions</label>
          <div className="flex flex-wrap gap-3">
            {emotions.map((emotion) => (
              <label key={emotion} className="inline-block">
                <input
                  type="checkbox"
                  value={emotion}
                  onChange={handleEmotionChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-lg">{emotion}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Daily Reflection */}
        <div>
          <label className="block text-lg mb-2">Daily Reflection</label>
          <textarea
            value={reflection}
            onChange={handleReflectionChange}
            className="w-full p-4 border-2 border-blue-500 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind today?"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded mt-4 transition duration-300"
        >
          Submit Check-In
        </button>
      </form>

      {/* Response Section */}
      {response && (
        <div className="mt-8 text-lg bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-xl mb-2">Your Check-In Response:</h3>
          <p className="text-white">{response}</p>
        </div>
      )}
    </div>
  );
}

export default CheckIn;



