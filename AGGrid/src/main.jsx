import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//AG grid moduler injuction
// import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
// ModuleRegistry.registerModules([AllCommunityModule]);
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';

ModuleRegistry.registerModules([AllEnterpriseModule]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
