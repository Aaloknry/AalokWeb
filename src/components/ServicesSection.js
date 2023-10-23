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
    // {
    //   title: 'B.Tech Engineering',
    //   imageSrc: '2.png',
    //   description: 'Get the necessary files Just In a Click',
    //   link: () => {
    //     Engineering()
    //   },
    // },
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
          SemI()
        },
      },
      {
        title: 'Sem-II',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          SemII()
        },
      },
      {
        title: 'Sem-III',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          SemIII()
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





  const SemI = () => {
    setTitle('BSc [H] Physics - SEM-I');
    setServicesData([
      {
        title: 'STR',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/13J04tKLdURJDAxzLW_7sGXTemoN3B_yy?usp=drive_link';
        },
      },
      {
        title: 'Chem',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1Infh0uWvcWENfFy-Pp087wbzo2Nf3dR-?usp=drive_link';
        },
      },
      {
        title: 'Mechanics',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1qCCg73A2qlgZCCHkRElQwaXDyoUd3k_p?usp=drive_link';
        },
      },
      {
        title: 'Wave & Oscillation',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1wOk2NB6D_2kfya7E4Xy0GlanM_X8f1jE?usp=drive_link';
        },
      },
      {
        title: 'Applied Mathematics-III',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1Pw07y_chNfHplvt60oH4dBOSb93DRO4A?usp=drive_link';
        },
      },
      {
        title: 'PY-QPaper',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1znTktrbLVuNgf7rlri-ZPWMh4SXQcGBg?usp=drive_link';
        },
      },
      {
        title: 'Physics Lab-I',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1aCrfeKycsPWBUNzLy8YXLWeM7nHCAFT6?usp=drive_link';
        },
      },
      {
        title: 'Misc',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1HwOyQQyXgj9eUfNAuKa1ng0PiT-SKp-W?usp=drive_link';
        },
      },
      
      // Add more service data here...
    ]);
  };




  const SemII = () => {
    setTitle('BSc [H] Physics - SEM-II');
    setServicesData([
      {
        title: 'AC-II Organic Chemistry',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1fnMfQ8-g9zFEvkIwG7Ru2RTyOflQGAZz?usp=drive_link';
        },
      },
      {
        title: 'AM-II Linear Algebra',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/10RJeVHLtJsFefz8hOXXjrEKy-eCQuxW5?usp=drive_link';
        },
      },
      {
        title: 'Mathematical Physics-I',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1Wz9vCSDEn4S-JHUzNZqjxr_qm6Vejczl?usp=drive_link';
        },
      },
      {
        title: 'Optics',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1o0sAT-Bn9Ei-C7l_YltrRi8gQItuei8Y?usp=drive_link';
        },
      },
      {
        title: 'Thermodynamics',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1HUrRxj8iqnFcYFPSq0NRkfFcs-7rhGEo?usp=drive_link';
        },
      },
      {
        title: 'PY-QPaper',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1yxbktqTLRJKWYWJNuATS4rCB3Ql3C5zq?usp=drive_link';
        },
      },
      {
        title: 'Physics Lab-II',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1E1c1yNaO2q3M4slB79qmGimPjVLqZ_Jn?usp=drive_link';
        },
      },
      {
        title: 'Misc',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1zaafSaFZzTg-7Se78QY1uaEihQoF47CN?usp=drive_link';
        },
      },
      
      // Add more service data here...
    ]);
  };




  const SemIII = () => {
    setTitle('BSc [H] Physics - SEM-III');
    setServicesData([
      {
        title: 'Analog Electronics',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1APNwE1z1tBOUHMq9hwJYlHAVCaRHIyU8?usp=share_link';
        },
      },
      {
        title: 'Classical Mechanics',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1AQ8Y9rOuvqJ-Jr5fnKLT9PCu5iiu7_Fd?usp=drive_link';
        },
      },
      {
        title: 'Electricity and Magnetism',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1As22ElPFJwO7IoBLILQJGTMYTRpchWgf?usp=drive_link';
        },
      },
      {
        title: 'Applied Mathematics-III',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1B6PgwPuF1dLkt1xj4Z6YQuuarKp0lUUp?usp=drive_link';
        },
      },
      {
        title: 'PY-QPaper',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1BbEH5NwSYlYedaENUl1ntyssa7Boj5ml?usp=drive_link';
        },
      },
      {
        title: 'Physics Lab-III',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1B049VOu4aS5XZAlSSq6_6d1ngmWu2xiV?usp=drive_link';
        },
      },
      {
        title: 'Misc',
        imageSrc: '1.png',
        description: 'Get the necessary files Just In a Click',
        link: () => {
          window.location.href = 'https://drive.google.com/drive/folders/1N5bRB7-TyEh5U4VuuapFMAvGNbJtP6YI?usp=drive_link';
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






  // const Engineering = () => {
  //   setTitle('Engineering');
  //   setServicesData([
  //     {
  //       title: 'Sem-III',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-IV',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-V',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-VI',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-III',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-IV',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-V',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-VI',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-III',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-IV',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-V',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-VI',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-III',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-IV',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-V',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     {
  //       title: 'Sem-VI',
  //       imageSrc: '2.png',
  //       description: 'Get the necessary files Just In a Click',
  //       link: () => {
  //         window.location.href = 'https';
  //       },
  //     },
  //     // Add more service data here...
  //   ]);
  // };




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










