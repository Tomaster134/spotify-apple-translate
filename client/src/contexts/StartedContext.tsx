import { createContext, useState } from "react";

interface IStartedContext {
    started: IStarted
    setStarted: React.Dispatch<React.SetStateAction<IStarted>>
}

interface IStarted {
    phase: string
}

export const StartedContext = createContext<IStartedContext>({} as IStartedContext)

export default function StartedContextProvider ({children}: {children: React.ReactNode}) {

    const [started, setStarted] = useState<IStarted>({
        phase: "GetStarted"
    })

    const values = {
        started,
        setStarted
    }

    return (
        <StartedContext.Provider value={values}>
            {children}
        </StartedContext.Provider>
    )
}