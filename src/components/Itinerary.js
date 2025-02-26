import React, { useState } from "react";
import "../styles/Itinerary.css";

const itineraryData = [
  {
    day: "Day 1 - Nov 14th 2023",
    details: `Our drivers would pick up from the JKIA airport at 7AM. 
    You would board our 4*4 Landcruisers to embark on your journey to Maasai Mara. 
    The road journey takes about 5 to 6 hours, but you would be amazed by the landscape en route.
    
    You would first see the Nairobi National Park on your left side. On a lucky day, 
    you might spot a White Rhino grazing near the fence. Nairobi city has a national park right in its heart!
    
    After one hour, you would climb up to The Great Rift Valley. This is a prized attraction of Kenya. 
    The Great Rift Valley runs for 4,000 miles (6,400 kilometers), from Jordan in southwestern Asia 
    to the coast of the Indian Ocean in central Mozambique. 

    You would reach Maasai Mara by noon. After check-in and lunch, you would go on your first game drive 
    on the great plains of Maasai Mara!! The afternoon game drive would take you around the Talek and Topi plains. 
    Here, you would see a huge pride of lions called the ‘Topi Pride’. 
    
    Return to your camp after 6PM, refresh, and enjoy the evening campfire. Have dinner and rest. (LD)`
  },
  {
    day: "Day 2 - Nov 15th",
    details: `Wake up early and enjoy a hot cup of coffee or tea before heading for the morning game drive.
    The mornings at Mara are chilly, so wear your fleece jacket. Breakfast would be packed for you.
    Witness the breathtaking sunrise at Mara.

    Enjoy a bush breakfast while watching wildlife. Post breakfast, look out for cheetahs.
    November is the season when Topis give birth, so you might witness a newborn Topi.
    
    Return to camp at 11:30 AM, freshen up, and have lunch. After a short rest, embark on an afternoon game drive at 3 PM.
    Our expert drivers will help locate a leopard for you.

    Capture amazing pictures, and return to the campfire after sunset. Have dinner and retire for the night. (BLD)`
  },
  {
    day: "Day 3 - Nov 16th",
    details: `Today is a full-day game drive towards the Maasai Mara-Tanzania border.
    Wake up early, freshen up, and head out in your designated vehicles with packed breakfast and lunch.
    
    You will visit the Sand River, which marks the entry point of migrating animals into Maasai Mara.
    Enjoy lunch while watching wildlife, and take a short nap before returning to the camp.

    Today, you have the highest chances of spotting a Rhino, completing the "Big 5" experience.
    
    Return to the camp with incredible memories. Enjoy your final night at the campfire and have dinner. (BLD)`
  },
  {
    day: "Day 4 - Nov 17th",
    details: `Wake up at leisure and enjoy a hearty breakfast while sharing your experiences with the group.
    Board the designated Landcruisers and start your journey back to Nairobi.

    You will be dropped at the JKIA airport, marking the end of this incredible safari adventure. (B)`
  }
];

const Itinerary = () => {
  const [openDays, setOpenDays] = useState([]); 

  const toggleDay = (index) => {
    setOpenDays((prevOpenDays) =>
      prevOpenDays.includes(index)
        ? prevOpenDays.filter((day) => day !== index) 
        : [...prevOpenDays, index] 
    );
  };

  return (
    <section id="itinerary" className="section">
      <h2>Tour Itinerary</h2>
      <div className="itinerary">
        {itineraryData.map((item, index) => (
          <div
            key={index}
            className={`itinerary-item ${openDays.includes(index) ? "open" : ""}`} 
            onClick={() => toggleDay(index)}
          >
            <h3>{item.day}</h3>
            <p>{openDays.includes(index) ? item.details : ""}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
