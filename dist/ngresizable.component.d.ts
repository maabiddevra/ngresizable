import { ElementRef, Renderer, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Store, ISize, IResizeEvent, IRectangle } from './ngresizable.store';
export declare class NgResizableComponent implements OnInit, OnChanges {
    private _el;
    private _store;
    private _renderer;
    resizeStart: EventEmitter<IResizeEvent>;
    resizing: EventEmitter<IResizeEvent>;
    resizeEnd: EventEmitter<IResizeEvent>;
    width: number;
    height: number;
    x: number;
    y: number;
    maxWidth: number;
    minWidth: number;
    maxHeight: number;
    minHeight: number;
    disableResize: boolean;
    directions: string[];
    grid: ISize;
    bound: IRectangle;
    ratio: number;
    constructor(_el: ElementRef, _store: Store, _renderer: Renderer);
    ngOnInit(): void;
    ngOnChanges(c: any): void;
    onMouseMove(e: any): void;
    onMouseDown(e: any, dir: any): void;
    onMouseUp(e: any): void;
    private emitAction(action, mousePosition, startPosition?, startSize?, startDirection?);
    private emitEvent(output);
    private readonly _state;
    private setSize(size, pos);
}
