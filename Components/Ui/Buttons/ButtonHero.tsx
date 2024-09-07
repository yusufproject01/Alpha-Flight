import { ButtonProps } from "@/types/btnInterface"


export const ButtonHeroContact = ({btnText}: ButtonProps) => {
    return (
        <button className="bg-secondary w-28 sm:w-44 h-8 sm:h-12 shadow-md hover:brightness-75 text-xs sm:text-lg text-white font-bold py-2 px-4 rounded-sm">
            {btnText}
        </button>
    )
}

export const ButtonHeroMore = ({btnText}: ButtonProps) => {
    return (
        <button className="bg-brand w-28 sm:w-44 h-8 sm:h-12 shadow-md hover:brightness-75 text-xs sm:text-lg  font-bold py-2 px-4 rounded-sm">
            {btnText}
        </button>
    )
}