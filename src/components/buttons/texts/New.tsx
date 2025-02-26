import { Button } from "@components/ui/button"
import { Plus } from "lucide-react"
import { useEffect } from "react"
import { NavLink, useNavigate } from 'react-router-dom'

interface NewProps {
    title: string
    route: string
}

const New = ({ title, route }: NewProps) => {
    const navigate = useNavigate()

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement
            if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return

            if (event.key === "n") {
                navigate(route)
            }
        }

        window.addEventListener("keydown", handleKeyPress)

        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [route, navigate])

    return (
        <NavLink to={route}>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <span className="flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    {title}
                </span>
            </Button>
        </NavLink>
    )
}

export default New
