import { Component, Input } from '@angular/core';
import { INode } from '@models/node';
import { IFlowchart } from '@models/flowchart';

@Component({
  selector: 'parameter-viewer',
  templateUrl: './parameter-viewer.component.html',
  styleUrls: ['./parameter-viewer.component.scss']
})
export class ParameterViewerComponent {
  @Input() flowchart: IFlowchart;
  @Input() startNode: INode;
  @Input() endNode: INode;
}


