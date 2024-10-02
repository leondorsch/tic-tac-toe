function createCircleSVG() {
    return `
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <circle 
                cx="35" 
                cy="35" 
                r="30" 
                stroke="#00B0EF" 
                stroke-width="5" 
                fill="none"
                stroke-dasharray="188.4" 
                stroke-dashoffset="188.4">
                <animate 
                    attributeName="stroke-dashoffset" 
                    from="188.4" 
                    to="0" 
                    dur="125ms" 
                    fill="freeze" 
                />
            </circle>
        </svg>
    `;
}

function createCrossSVG() {
    return `
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <line 
                x1="15" y1="15" 
                x2="55" y2="55" 
                stroke="#FFC000" 
                stroke-width="5"
                stroke-linecap="round"
                stroke-dasharray="56.57" 
                stroke-dashoffset="56.57">
                <animate 
                    attributeName="stroke-dashoffset" 
                    from="56.57" 
                    to="0" 
                    dur="125ms" 
                    fill="freeze" 
                />
            </line>
            <line 
                x1="55" y1="15" 
                x2="15" y2="55" 
                stroke="#FFC000" 
                stroke-width="5"
                stroke-linecap="round"
                stroke-dasharray="56.57" 
                stroke-dashoffset="56.57">
                <animate 
                    attributeName="stroke-dashoffset" 
                    from="56.57" 
                    to="0" 
                    begin="125ms" 
                    dur="125ms" 
                    fill="freeze" 
                />
            </line>
        </svg>
    `;
}