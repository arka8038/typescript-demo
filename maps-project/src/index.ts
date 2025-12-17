import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user); //Implicitly implements the Mappable interface
customMap.addMarker(company); //Implicitly implements the Mappable interface
