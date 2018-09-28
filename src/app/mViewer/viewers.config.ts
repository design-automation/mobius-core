import { IView } from './view.interface'; 
// Step-1: Add new ViewerComponet here
import { TextViewerComponent, JSONViewerComponent, ThreeViewerComponent } from './viewers';

export const VIEWER_ARR = [
    TextViewerComponent, 
    JSONViewerComponent, 
    ThreeViewerComponent
    // Step-2: Add Component here
];

export const Viewers: IView[] = [
    { name: 'text-viewer', icon: undefined, component: TextViewerComponent },
    { name: 'json-viewer', icon: undefined, component: JSONViewerComponent },
    // Step-3: Add Viewer Definition here: name, icon and component
    // { name: 'three-viewer', icon: undefined, component: ThreeViewerComponent }
];
