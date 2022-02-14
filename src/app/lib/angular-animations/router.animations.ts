import {animate,AnimationTriggerMetadata,query,style,transition,trigger} from '@angular/animations';

export const routeAnimations =
  trigger( 'routeAnimations',[
    transition( '* <=> *',faderIn() )
  ] );

export function faderIn() {
  const optional = {optional: true};
  return [
    query( ':enter, :leave',[
      style( {
        left: 0,
        opacity: 0,
        position: 'absolute',
        width: '100%'
      } )
    ],optional ),
    query( ':enter',[
      animate( '0.3s',style( {opacity: 1} ) )
    ],optional )
  ];
}

export const insertRemoveTrigger: AnimationTriggerMetadata = trigger( 'insertRemoveTrigger',[
  transition( ':enter',[
    style( {opacity: 0} ),
    animate( '1000ms',style( {opacity: 1} ) )
  ] ),
  transition( ':leave',[
    animate( '100ms',style( {opacity: 0} ) )
  ] )
] );
