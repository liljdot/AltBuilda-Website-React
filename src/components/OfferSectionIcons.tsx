import businessManagementIcon from "../assets/business-management-icon.png"
import businsessManagementIconDark from "../assets/business-management-icon-dark.png"

import financialSolutionIcon from "../assets/financial-solution-icon.png"
import financialSolutionIconDark from "../assets/financial solution-icon-dark.png"

import cardsIcon from "../assets/cards-icon.png"
import cardsIconDark from "../assets/cards-icon-dark.png"
import useThemeContext from "../hooks/useThemeContext"

interface Props {
    size: number
}

export const BusinessMangementIcon: React.FC<Props> = ({ size }) => {
    const { theme } = useThemeContext()

    return <img src={theme == "dark" ? businsessManagementIconDark : businessManagementIcon} alt="Wallet icon" className={"size-" + size} />
}

export const FinancialSoulutionIcon: React.FC<Props> = ({ size }) => {
    const { theme } = useThemeContext()

    return <img src={theme == "dark" ? financialSolutionIconDark : financialSolutionIcon} alt="Wallet icon" className={"size-" + size} />
}

export const CardsIcon: React.FC<Props> = ({ size }) => {
    const { theme } = useThemeContext()

    return <img src={theme == "dark" ? cardsIconDark : cardsIcon} alt="Wallet icon" className={"size-" + size} />
}