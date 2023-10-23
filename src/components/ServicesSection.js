import React, { useState } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const [title, setTitle] = useState('BSc [H] Physics');
  const [servicesData, setServicesData] = useState([
    {
      title: 'B.Sc [H] Physics',
      imageSrc: '1.png',
      description: 'Get the necessary files Just In a Click',
      link: () => {
        // Implement the logic you want for the Physics function.
        // This function will be called when you click the "Get Now" button.
        Physics()
        
      },
    },
    {
      title: 'B.Tech Engineering',
      imageSrc: '2.png',
      description: 'Get the necessary files Just In a Click',
      link: () => {
        Engineering()
      },
    },
    // Add more service data here...
  ]);

  const Physics = () => {
    setTitle('BSc [H] Physics');
    setServicesData([
      {
        title: 'Sem-I',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-II',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-III',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-IV',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          SemIV()
        },
      },
      {
        title: 'Sem-V',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          SemV()
        },
      },
      {
        title: 'Sem-VI',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          
        },
      },
      
      
      // Add more service data here...
    ]);
  };





  const SemIV = () => {
    setTitle('BSc [H] Physics - SEM-IV');
    setServicesData([
      {
        title: 'Quantum Mechanics',
        imageSrc: 'qm.jpg',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1qah36wOg58k19hCG74l3J-Ia34m9drRO?usp=share_link';
        },
      },
      {
        title: 'Atomic Physics',
        imageSrc: 'atom.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1zb0u7B6TJDUqsyIR9SRNSJbRaE2xJA2Y?usp=share_link';
        },
      },
      {
        title: 'Laser Physics',
        imageSrc: 'lp.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/10-HyWVu98PZ7GPvlH281QyE6JU52AZEl?usp=share_link';
        },
      },
      {
        title: 'Mathematical Physics-II',
        imageSrc: 'mp.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1ToZHecZW-b6DVZx5KUfMhnJ5K796Pz4-?usp=share_link';
        },
      },
      {
        title: 'Applied Mathematics-IV',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1RIzy7MgNhs6hUfCEEPh9zYNU9tPPGlDa?usp=share_link';
        },
      },
      {
        title: 'Physics Lab-IV',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/18qjCwXrNG7quNjGBVdPkML2cpMK_uS7w?usp=share_link';
        },
      },
      {
        title: 'Misc',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1lAycEbv4IVrITdMH8pI9KtBZVd1Vs0u0?usp=share_link';
        },
      },
      
      // Add more service data here...
    ]);
  };





  const SemV = () => {
    setTitle('BSc [H] Physics - SEM-V');
    setServicesData([
      {
        title: 'Condensed Matter Physics',
        imageSrc: 'lp.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1uPaVrDDf5CAxPiTKDBcfJIMXVVIk_yqc?usp=sharing';
        },
      },
      {
        title: 'Statistical Mechanics',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1wI7rHqnjVIGp4fxeO79z6JfoiYTF0PGR?usp=sharing';
        },
      },
      {
        title: 'Nuclear & Particle Physics',
        imageSrc: 'atom.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1kOFGH1AjwKQi14kBGdTCxas5RGfEYkUM?usp=sharing';
        },
      },
      {
        title: 'Physics Lab-V',
        imageSrc: 'atom.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1jzDqXZ2JY1CN9gLMxohIhxU-RtG414bK?usp=sharing';
        },
      },
      {
        title: 'Summer Project',
        imageSrc: 'mp.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1Kq7HdYRI-EDF57DoquywIi_TnwaY3s5p?usp=sharing';
        },
      },
      {
        title: 'Spectroscopy',
        imageSrc: 'qm.jpg',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1or9U_AvP8h2vPXZRi_apXTx_UA12xRj4?usp=sharing';
        },
      },
      {
        title: 'Misc',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1ZHTy4uDqdeltpuYq4hLnsXwJR99ToY2x?usp=sharing';
        },
      },
      
      // Add more service data here...
    ]);
  };






  const Engineering = () => {
    setTitle('Engineering');
    setServicesData([
      {
        title: 'Sem-III',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-IV',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-V',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-VI',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-III',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-IV',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-V',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-VI',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-III',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-IV',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-V',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-VI',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-III',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-IV',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-V',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      {
        title: 'Sem-VI',
        imageSrc: '2.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https';
        },
      },
      // Add more service data here...
    ]);
  };

  return (
    
    <section id="services-container">
      <h1 className="h-primary center">{title}</h1>
      <div className="services">
        {servicesData.map((service, index) => (
          <div className="box" key={index}>
            <img src={service.imageSrc} alt={service.title} />
            <h2 className="h-secondary center">{service.title}</h2>
            <p className="center">{service.description}</p>
            {/* <a href={service.link} className="btn2" rel="noopener noreferrer">
              GET NOW
            </a> */}
            <button className="btn2" onClick={service.link} // Call the Physics function on button click 
            >GET NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;










