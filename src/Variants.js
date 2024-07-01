export const fadeIn = (direction, delay)=> {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? '25%' : direction === 'down' ? '-25%' : 0,
            x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'twin',
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        },

    }
}