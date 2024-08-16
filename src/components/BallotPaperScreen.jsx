import { useState } from "react";

const imageMapping = {
  punjab: {
    civil: [
      {
        name: "Civil   |   Architectural",
        link: "../assets/ballot-paper-images/civil_punjab.jpeg",
      },
    ],
    civil2: [
      {
        name: "Transport   |   Environmental",
        link: "../assets/ballot-paper-images/civil2_punjab.jpeg",
      },
    ],
    civil3: [
      {
        name: "Ecological   |   Urban   |   Ocean",
        link: "../assets/ballot-paper-images/civil2_punjab.jpeg",
      },
    ],
    mechanical: [
      {
        name: "Mechanical",
        link: "../assets/ballot-paper-images/mechanical_punjab.jpeg",
      },
    ],
    mechatronics: [
      {
        name: "Mecatro   |   Indus   |   Nuclear",
        link: "../assets/ballot-paper-images/mechatronics_punjab.jpeg",
      },
    ],
    mechatronics2: [
      {
        name: "Textile   |   Automotive",
        link: "../assets/ballot-paper-images/mechatronics_punjab.jpeg",
      },
    ],
    metallurgy: [
      {
        name: "Mining   |   Pet-gas",
        link: "../assets/ballot-paper-images/metallurgy_punjab.jpeg",
      },
    ],
    metallurgy2: [
      {
        name: "Metal   |   Agriculture",
        link: "../assets/ballot-paper-images/metallurgy_punjab.jpeg",
      },
    ],
    chemical: [
      {
        name: "Chemical   |   Polymer   |   Food",
        link: "../assets/ballot-paper-images/chemical_punjab.jpeg",
      },
    ],
    computer: [
      {
        name: "Computer",
        link: "../assets/ballot-paper-images/computer_punjab.jpeg",
      },
    ],
    telecom: [
      {
        name: "Telecom   |   Aero   |   Avionics",
        link: "../assets/ballot-paper-images/telecom_punjab.jpeg",
      },
    ],
    electronics: [
      {
        name: "Electronics |   Engg Science",
        link: "../assets/ballot-paper-images/electronics_punjab.jpeg",
      },
    ],
    electrical: [
      {
        name: "Electrical   |   Bio-Medical   |   Energy",
        link: "../assets/ballot-paper-images/electrical_punjab.jpeg",
      },
    ],
  },
  sindh: {
    civil: [
      {
        name: "Civil   |   Architectural   |   Ecological",
        link: "../assets/ballot-paper-images/civil_sindh.jpeg",
      },
    ],
    civil2: [
      {
        name: "Transport   |   Environmental",
        link: "../assets/ballot-paper-images/civil2_sindh.jpeg",
      },
    ],

    civil3: [
      {
        name: "Urban   |   Ocean",
        link: "../assets/ballot-paper-images/civil2_sindh.jpeg",
      },
    ],
    mechanical: [
      {
        name: "Mechanical",
        link: "../assets/ballot-paper-images/mechanical_sindh.jpeg",
      },
    ],
    mechatronics: [
      {
        name: "Mecatro   |   Indus   |   Nuclear",
        link: "../assets/ballot-paper-images/mechatronics_sindh.jpeg",
      },
    ],
    mechatronics2: [
      {
        name: "Textile   |   Automotive",
        link: "../assets/ballot-paper-images/mechatronics_sindh.jpeg",
      },
    ],
    metallurgy: [
      {
        name: "Metal   |   Agricultural",
        link: "../assets/ballot-paper-images/metallurgy_sindh.jpeg",
      },
    ],
    metallurgy2: [
      {
        name: "Mining   |   Pet-gas",
        link: "../assets/ballot-paper-images/metallurgy_sindh.jpeg",
      },
    ],
    chemical: [
      {
        name: "Chemical   |   Polymer   |   Food",
        link: "../assets/ballot-paper-images/chemical_sindh.jpeg",
      },
    ],
    computer: [
      {
        name: "Computer",
        link: "../assets/ballot-paper-images/computer_sindh.jpeg",
      },
    ],
    telecom: [
      {
        name: "Telecom   |   Aero   |   Avionics",
        link: "../assets/ballot-paper-images/telecom_sindh.jpeg",
      },
    ],
    electronics: [
      {
        name: "Electronics   |   Engg Science",
        link: "../assets/ballot-paper-images/electronics_sindh.jpeg",
      },
    ],
    electrical: [
      {
        name: "Electrical   |   Bio-Medical   |   Energy",
        link: "../assets/ballot-paper-images/electrical_sindh.jpeg",
      },
    ],
  },

  kpk: {
    civil: [
      {
        name: "Civil   |   Architectural   |   Ecological",
        link: "../assets/ballot-paper-images/civil_kpk.jpeg",
      },
    ],
    civil2: [
      {
        name: "Transport   |   Environmental ",
        link: "../assets/ballot-paper-images/civil2_kpk.jpeg",
      },
    ],

    civil3: [
      {
        name: "Urban   |   Ocean",
        link: "../assets/ballot-paper-images/civil2_kpk.jpeg",
      },
    ],
    mechanical: [
      {
        name: "Mechanical",
        link: "../assets/ballot-paper-images/mechanical_kpk.jpeg",
      },
    ],
    mechatronics: [
      {
        name: "Mecatro   |   Indus   |   Nuclear",
        link: "../assets/ballot-paper-images/mechatronics_kpk.jpeg",
      },
    ],
    mechatronics2: [
      {
        name: "Textile   |   Automotive",
        link: "../assets/ballot-paper-images/mechatronics_kpk.jpeg",
      },
    ],
    metallurgy: [
      {
        name: "Metal   |   Agricultural",
        link: "../assets/ballot-paper-images/metallurgy_kpk.jpeg",
      },
    ],
    metallurgy2: [
      {
        name: "Mining   |   Pet-gas",
        link: "../assets/ballot-paper-images/metallurgy_kpk.jpeg",
      },
    ],
    chemical: [
      {
        name: "Chemical   |   Polymer   |   Food",
        link: "../assets/ballot-paper-images/chemical_kpk.jpeg",
      },
    ],
    computer: [
      {
        name: "Computer",
        link: "../assets/ballot-paper-images/computer_kpk.jpeg",
      },
    ],
    telecom: [
      {
        name: "Telecom   |   Aero   |   Avionics",
        link: "../assets/ballot-paper-images/telecom_kpk.jpeg",
      },
    ],
    electronics: [
      {
        name: "Electronics   |   Engg Science",
        link: "../assets/ballot-paper-images/electronics_kpk.jpeg",
      },
    ],
    electrical: [
      {
        name: "Electrical   |   Bio-Medical   |   Energy",
        link: "../assets/ballot-paper-images/electrical_kpk.jpeg",
      },
    ],
  },

  baloch: {
    civil: [
      {
        name: "Civil   |   Architectural",
        link: "../assets/ballot-paper-images/civil_baloch.jpeg",
      },
    ],
    civil2: [
      {
        name: "Transport   |   Environmental",
        link: "../assets/ballot-paper-images/civil2_baloch.jpeg",
      },
    ],
    civil3: [
      {
        name: "Ecological   |   Urban   |   Ocean",
        link: "../assets/ballot-paper-images/civil2_baloch.jpeg",
      },
    ],
    mechanical: [
      {
        name: "Mechanical",
        link: "../assets/ballot-paper-images/mechanical_baloch.jpeg",
      },
    ],
    mechatronics: [
      {
        name: "Textile   |   Automotive",
        link: "../assets/ballot-paper-images/mechatronics_baloch.jpeg",
      },
    ],
    mechatronics2: [
      {
        name: "Textile   |   Automotive",
        link: "../assets/ballot-paper-images/mechatronics_baloch.jpeg",
      },
    ],
    metallurgy: [
      {
        name: "Metal   |   Agricultural",
        link: "../assets/ballot-paper-images/metallurgy_baloch.jpeg",
      },
    ],
    metallurgy2: [
      {
        name: "Mining   |   Pet-gas",
        link: "../assets/ballot-paper-images/metallurgy_baloch.jpeg",
      },
    ],
    chemical: [
      {
        name: "Chemical   |   Polymer   |   Food",
        link: "../assets/ballot-paper-images/chemical_baloch.jpeg",
      },
    ],
    computer: [
      {
        name: "Computer",
        link: "../assets/ballot-paper-images/computer_baloch.jpeg",
      },
    ],
    telecom: [
      {
        name: "Telecom   |   Aero   |   Avionics",
        link: "../assets/ballot-paper-images/telecom_baloch.jpeg",
      },
    ],
    electronics: [
      {
        name: "Electronics   |   Engg Science",
        link: "../assets/ballot-paper-images/electronics_baloch.jpeg",
      },
    ],
    electrical: [
      {
        name: "Electrical   |   Bio-Medical   |   Energy",
        link: "../assets/ballot-paper-images/electrical_baloch.jpeg",
      },
    ],
  },

  azk: {
    civil: [
      {
        name: "Civil   |   Architectural",
        link: "../assets/ballot-paper-images/civil_punjab.jpeg",
      },
    ],
    civil2: [
      {
        name: "Transport   |   Environmental",
        link: "../assets/ballot-paper-images/civil2_punjab.jpeg",
      },
    ],
    civil3: [
      {
        name: "Ecological   |   Urban   |   Ocean",
        link: "../assets/ballot-paper-images/civil2_punjab.jpeg",
      },
    ],
    mechanical: [
      {
        name: "Mechanical",
        link: "../assets/ballot-paper-images/mechanical_punjab.jpeg",
      },
    ],
    mechatronics: [
      {
        name: "Mecatro   |   Indus   |   Nuclear",
        link: "../assets/ballot-paper-images/mechatronics_punjab.jpeg",
      },
    ],
    mechatronics2: [
      {
        name: "Textile   |   Automotive",
        link: "../assets/ballot-paper-images/mechatronics_punjab.jpeg",
      },
    ],
    metallurgy: [
      {
        name: "Mining   |   Pet-gas",
        link: "../assets/ballot-paper-images/metallurgy_punjab.jpeg",
      },
    ],
    metallurgy2: [
      {
        name: "Metal   |   Agriculture",
        link: "../assets/ballot-paper-images/metallurgy_punjab.jpeg",
      },
    ],
    chemical: [
      {
        name: "Chemical   |   Polymer   |   Food",
        link: "../assets/ballot-paper-images/chemical_punjab.jpeg",
      },
    ],
    computer: [
      {
        name: "Computer",
        link: "../assets/ballot-paper-images/computer_punjab.jpeg",
      },
    ],
    telecom: [
      {
        name: "Telecom   |   Aero   |   Avionics",
        link: "../assets/ballot-paper-images/telecom_punjab.jpeg",
      },
    ],
    electronics: [
      {
        name: "Electronics |   Engg Science",
        link: "../assets/ballot-paper-images/electronics_punjab.jpeg",
      },
    ],
    electrical: [
      {
        name: "Electrical   |   Bio-Medical   |   Energy",
        link: "../assets/ballot-paper-images/electrical_punjab.jpeg",
      },
    ],
  },

  isl: {
    civil: [
      {
        name: "Civil   |   Architectural",
        link: "../assets/ballot-paper-images/civil_punjab.jpeg",
      },
    ],
    civil2: [
      {
        name: "Transport   |   Environmental",
        link: "../assets/ballot-paper-images/civil2_punjab.jpeg",
      },
    ],
    civil3: [
      {
        name: "Ecological   |   Urban   |   Ocean",
        link: "../assets/ballot-paper-images/civil2_punjab.jpeg",
      },
    ],
    mechanical: [
      {
        name: "Mechanical",
        link: "../assets/ballot-paper-images/mechanical_punjab.jpeg",
      },
    ],
    mechatronics: [
      {
        name: "Mecatro   |   Indus   |   Nuclear",
        link: "../assets/ballot-paper-images/mechatronics_punjab.jpeg",
      },
    ],
    mechatronics2: [
      {
        name: "Textile   |   Automotive",
        link: "../assets/ballot-paper-images/mechatronics_punjab.jpeg",
      },
    ],
    metallurgy: [
      {
        name: "Mining   |   Pet-gas",
        link: "../assets/ballot-paper-images/metallurgy_punjab.jpeg",
      },
    ],
    metallurgy2: [
      {
        name: "Metal   |   Agriculture",
        link: "../assets/ballot-paper-images/metallurgy_punjab.jpeg",
      },
    ],
    chemical: [
      {
        name: "Chemical   |   Polymer   |   Food",
        link: "../assets/ballot-paper-images/chemical_punjab.jpeg",
      },
    ],
    computer: [
      {
        name: "Computer",
        link: "../assets/ballot-paper-images/computer_punjab.jpeg",
      },
    ],
    telecom: [
      {
        name: "Telecom   |   Aero   |   Avionics",
        link: "../assets/ballot-paper-images/telecom_punjab.jpeg",
      },
    ],
    electronics: [
      {
        name: "Electronics |   Engg Science",
        link: "../assets/ballot-paper-images/electronics_punjab.jpeg",
      },
    ],
    electrical: [
      {
        name: "Electrical   |   Bio-Medical   |   Energy",
        link: "../assets/ballot-paper-images/electrical_punjab.jpeg",
      },
    ],
  },

  gb: {
    civil: [
      {
        name: "Civil   |   Architectural   |   Ecological",
        link: "../assets/ballot-paper-images/civil_kpk.jpeg",
      },
    ],
    civil2: [
      {
        name: "Transport   |   Environmental ",
        link: "../assets/ballot-paper-images/civil2_kpk.jpeg",
      },
    ],

    civil3: [
      {
        name: "Urban   |   Ocean",
        link: "../assets/ballot-paper-images/civil2_kpk.jpeg",
      },
    ],
    mechanical: [
      {
        name: "Mechanical",
        link: "../assets/ballot-paper-images/mechanical_kpk.jpeg",
      },
    ],
    mechatronics: [
      {
        name: "Mecatro   |   Indus   |   Nuclear",
        link: "../assets/ballot-paper-images/mechatronics_kpk.jpeg",
      },
    ],
    mechatronics2: [
      {
        name: "Textile   |   Automotive",
        link: "../assets/ballot-paper-images/mechatronics_kpk.jpeg",
      },
    ],
    metallurgy: [
      {
        name: "Metal   |   Agricultural",
        link: "../assets/ballot-paper-images/metallurgy_kpk.jpeg",
      },
    ],
    metallurgy2: [
      {
        name: "Mining   |   Pet-gas",
        link: "../assets/ballot-paper-images/metallurgy_kpk.jpeg",
      },
    ],
    chemical: [
      {
        name: "Chemical   |   Polymer   |   Food",
        link: "../assets/ballot-paper-images/chemical_kpk.jpeg",
      },
    ],
    computer: [
      {
        name: "Computer",
        link: "../assets/ballot-paper-images/computer_kpk.jpeg",
      },
    ],
    telecom: [
      {
        name: "Telecom   |   Aero   |   Avionics",
        link: "../assets/ballot-paper-images/telecom_kpk.jpeg",
      },
    ],
    electronics: [
      {
        name: "Electronics   |   Engg Science",
        link: "../assets/ballot-paper-images/electronics_kpk.jpeg",
      },
    ],
    electrical: [
      {
        name: "Electrical   |   Bio-Medical   |   Energy",
        link: "../assets/ballot-paper-images/electrical_kpk.jpeg",
      },
    ],
  },
};

const BallotPaperScreen = () => {
  const [province, setProvince] = useState("");
  const [discipline, setDiscipline] = useState("");

  const disciplines = province ? Object.keys(imageMapping[province]) : [];

  const selectedDiscipline =
    discipline && province ? imageMapping[province][discipline] : [];
  console.log(selectedDiscipline[0]?.link);

  return (
    <div>
      <h2>Select Province and Discipline</h2>
      <select onChange={(e) => setProvince(e.target.value)} value={province}>
        <option value="">Select Province</option>
        <option value="punjab">Punjab</option>
        <option value="sindh">Sindh</option>
        <option value="kpk">KPK</option>
        <option value="baloch">Balochistan</option>
        <option value="azk">GB/AZK</option>
        <option value="isl">Federal Islamabad</option>
      </select>
      {province && (
        <select
          onChange={(e) => setDiscipline(e.target.value)}
          value={discipline}
        >
          <option value="">Select Discipline</option>
          {disciplines.map((discipline, index) => (
            <option key={index} value={discipline}>
              {imageMapping[province][discipline][0].name}
            </option>
          ))}
        </select>
      )}

      {selectedDiscipline?.length > 0 && (
        <div>
          <img
            src={selectedDiscipline[0]?.link}
            alt={selectedDiscipline[0].name}
          />
          <a
            href={selectedDiscipline[0]?.link}
            download={`${selectedDiscipline[0].name}.jpg`}
            className="download-btn"
          >
            Download Image
          </a>
        </div>
      )}
    </div>
  );
};

export default BallotPaperScreen;
