export interface OverlayCloseEvent<T> {
  typeCloseEvent: TypeCloseEvent,
  data: T | undefined
}

export enum TypeCloseEvent {
  Close = 'close',
  BackdropClick = 'backdropClick'
}
