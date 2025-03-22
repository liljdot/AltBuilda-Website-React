import clipboardDoodle from "../assets/clipboard-doodle.png"
import clipboardDoodleBlack from "../assets/clipboard-doodle-black.png"

import toolsDoodle from "../assets/tools-doodle.png"
import toolsDoodleBlack from "../assets/tools-doodle-black.png"

import toolboxDoodle from "../assets/toolbox-doodle.png"
import toolboxDoodleBlack from "../assets/toolbox-doodle-black.png"

import handshakeDoodle from "../assets/handshake-doodle.png"
import handshakeDoodleBlack from "../assets/handshake-doodle-black.png"
import useThemeContext from "../hooks/useThemeContext"

const width = 80

export const ClipboardDoodle: React.FC = () => {
    const {theme} = useThemeContext()

    return <img src={theme == "light" ? clipboardDoodleBlack : clipboardDoodle} alt="Clipboard Doodle" width={width}/>
}

export const ToolsDoodle: React.FC = () => {
    const { theme } = useThemeContext()

    return <img src={theme == "light" ? toolsDoodleBlack : toolsDoodle} alt="Tools Doodle" width={width} />
}

export const ToolboxDoodle: React.FC = () => {
    const {theme} = useThemeContext()

    return <img src={theme == "light" ? toolboxDoodleBlack : toolboxDoodle} alt="Toolbox Doodle" width={width}/>
}

export const HandshakeDoodle: React.FC = () => {
    const {theme} = useThemeContext()

    return <img src={theme == "light" ? handshakeDoodleBlack : handshakeDoodle} alt="Handshake Doodle" width={width}/>
}