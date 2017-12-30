import { trigger, state, style, transition, animate } from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('0', style({
            'max-height': '0px', 'opacity': '0'
        })),
        state('1', style({
            'max-height': '200px', 'opacity': '1'
        })),
        transition('0 <=> 1',
            animate('350ms ease-in-out')
        ),
    ]),
]