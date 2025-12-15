import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//AG grid moduler injuction
// import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
// ModuleRegistry.registerModules([AllCommunityModule]);
import { TreeDataModule } from "ag-grid-enterprise";
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { AllEnterpriseModule, IntegratedChartsModule, ServerSideRowModelModule} from 'ag-grid-enterprise';
import { AgChartsEnterpriseModule} from 'ag-charts-enterprise';

ModuleRegistry.registerModules([AllEnterpriseModule,TreeDataModule,ServerSideRowModelModule,IntegratedChartsModule.with(AgChartsEnterpriseModule)]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
