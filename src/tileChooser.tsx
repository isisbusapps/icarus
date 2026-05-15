import React from 'react';
import ISISProposalsTile from './assets/ISISProposalsTile.png';
import CLFProposalsTile from './assets/CLFProposalsTile.png';
import AdaTile from './assets/AdaTile.png';
import DataCatalogueTile from './assets/DataCatalogueTile.png';
import ExperimentReportsTile from './assets/ExperimentReportsTile.png';
import ISISCosumablesTile from './assets/ISISCosumablesTile.png';
import RiskAssessmentsTile from './assets/RiskAssessmentsTile.png';
import SafetyTestsTile from './assets/SafetyTestsTile.png';
import SchedulerTile from './assets/SchedulerTile.png';
import VisitsTile from './assets/VisitsTile.png';


const TileChooser = ({setCategory}) => {
  // All supported apps - tile layout
  const faseApps = [
    'ISIS Proposals',
    'CLF Proposals',
    'Visits',
    'Scheduler',
    'Risk Assessments',
    'Safety Tests',
    'ISIS Consumables',
    'Data Catalogue',
    'Experiment Reports',
    'Ada'
  ];

  // metadata for the chooser menu [tile image, hovertext]
  const faseAppsChooser = {
    'ISIS Proposals': ISISProposalsTile,
    'CLF Proposals': CLFProposalsTile,
    'Visits': VisitsTile,
    'Scheduler': SchedulerTile,
    'Risk Assessments': RiskAssessmentsTile,
    'Safety Tests': SafetyTestsTile,
    'ISIS Consumables': ISISCosumablesTile,
    'Data Catalogue': DataCatalogueTile,
    'Ada': AdaTile,
    'Experiment Reports': ExperimentReportsTile
  };

  const handleChange = (e) => {

    //get the clicked app name and therefore the category
    const newValue = e.target.textContent;

    const docListDisplay = document.getElementById('docListPane');

    setCategory(newValue);

    //show the document library and load correct contents
      docListDisplay.style.display="block";
      console.log("Triggered open the document Library with " + newValue);

    };



  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h2>FASE apps</h2>
        <ul className="tilesPane" style={{ listStyleType: 'none', padding: 20 }}>
        {faseApps.map((app, index) => (
          <li key={index} style={{ margin: '10px 10px' }}>
            <div
              style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}
              onClick={handleChange}
            >
                {app.replace(/_/g, ' ')}
            </div>    
            <img src={faseAppsChooser[app]} className='downFitTiles'/>
          </li>
        ))}
      </ul>    
    </div>
  );
};

export default TileChooser;


//href={`/documents/${app}`}