import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card'

function Home() {
  return (
    <div className='home'>
        <Banner />

        <div className='home_section'>
          <Card 
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."/>
          <Card 
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."/>
          <Card 
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."/>
        </div>
        <div className='home_section'>
          <Card 
          src="https://a0.muscache.com/im/pictures/miso/Hosting-36165132/original/64a7e292-1cf6-4653-a6e3-75dd196038b7.jpeg?im_w=720"
          title="Treehouse in Salet"
          description="Sit back and view the beauty and wildernass of the most beautiful island of Indonesia, Bali."
          price="$350 a night"/>
          <Card 
          src="https://a0.muscache.com/im/pictures/72e3dfea-2b90-4afe-a1bd-1be37e77539a.jpg?im_w=720"
          title="Pelkosenniemi, Finland"
          description="Sit back all chilly and watch the amazing spectacle of the aurora borealis shoot across the night sky"
          price="$188 a night"/>
          <Card 
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48748370/original/1e882ee5-9c12-4968-99d2-67bf7760a072.jpeg?im_w=720"
          title="Santa Teresa Beach, Costa Rica"
          description= "Enjoy the tropical climate and the beauty of Costa Rica."
          price="$1,261 a night"/>
        </div>
    </div>
  )
}

export default Home