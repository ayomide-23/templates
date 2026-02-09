import { ResumeData, ThemeVariant } from '@/types/resume';
import { Template01ClassicClean } from './Template01ClassicClean';
import { Template02ModernTwoColumn } from './Template02ModernTwoColumn';
import { Template03CreativeColorBar } from './Template03CreativeColorBar';
import { Template04ExecutiveMinimal } from './Template04ExecutiveMinimal';
import { Template05TechnicalCV } from './Template05TechnicalCV';
import { Template06DesignerPortfolio } from './Template06DesignerPortfolio';
import { Template07AcademicResearch } from './Template07AcademicResearch';
import { Template08Timeline } from './Template08Timeline';
import { Template09FunctionalSkills } from './Template09FunctionalSkills';
import { Template10InfographicLight } from './Template10InfographicLight';
import { Template11ATSFriendly } from './Template11ATSFriendly';
import { Template12CreativeLeftBand } from './Template12CreativeLeftBand';
import { Template13ModernThreeColumn } from './Template13ModernThreeColumn';
import { Template14MinimalSidebar } from './Template14MinimalSidebar';
import { Template15Corporate } from './Template15Corporate';
import { Template16StartupProduct } from './Template16StartupProduct';
import { Template17SalesBusiness } from './Template17SalesBusiness';
import { Template18HealthcareClinical } from './Template18HealthcareClinical';
import { Template19EngineeringTechnical } from './Template19EngineeringTechnical';
import { Template20PersonalBrand } from './Template20PersonalBrand';

export interface TemplateProps {
  data: ResumeData;
  theme: ThemeVariant;
}

type TemplateComponent = (props: TemplateProps) => JSX.Element;

const templates: Record<number, TemplateComponent> = {
  1: Template01ClassicClean,
  2: Template02ModernTwoColumn,
  3: Template03CreativeColorBar,
  4: Template04ExecutiveMinimal,
  5: Template05TechnicalCV,
  6: Template06DesignerPortfolio,
  7: Template07AcademicResearch,
  8: Template08Timeline,
  9: Template09FunctionalSkills,
  10: Template10InfographicLight,
  11: Template11ATSFriendly,
  12: Template12CreativeLeftBand,
  13: Template13ModernThreeColumn,
  14: Template14MinimalSidebar,
  15: Template15Corporate,
  16: Template16StartupProduct,
  17: Template17SalesBusiness,
  18: Template18HealthcareClinical,
  19: Template19EngineeringTechnical,
  20: Template20PersonalBrand
};

export function getTemplateComponent(id: number): TemplateComponent {
  return templates[id] || Template01ClassicClean;
}
