import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
// yPNF3olmthj9NxUk
const Login = () => {
    const [signupInput, setsignupInput] = useState({ name: "", email: "", password: "" })
    const [LoginInput, setLoginInput] = useState({ email: "", password: "" })


    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "Signup") {
            setsignupInput({ ...signupInput, [name]: value })
        }
        else {
            setLoginInput({ ...LoginInput, [name]: value })
        }
    }

    const handleRegistration = (type) => {
        const inputData = type === "signup" ? signupInput : LoginInput
        console.log("inputData", inputData)

    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Create a new account and click signup when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={signupInput.name}
                                    onChange={(e) => changeInputHandler(e, "Signup")}
                                    placeholder="Eg. Sachin"
                                    required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={signupInput.email}
                                    onChange={(e) => changeInputHandler(e, "Signup")}
                                    placeholder="Eg. Sachin@google.com"
                                    required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={signupInput.password}
                                    onChange={(e) => changeInputHandler(e, "Signup")}
                                    placeholder="Eg. password"
                                    required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleRegistration("signup")}>Signup</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login  your password here. after signup, you will be logged in.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={LoginInput.email}
                                    onChange={(e) => changeInputHandler(e, "login")}
                                    placeholder="Eg. Sachin@google.com"
                                    required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={LoginInput.password}
                                    onChange={(e) => changeInputHandler(e, "login")}
                                    placeholder="Eg. password"
                                    required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleRegistration("login")}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login