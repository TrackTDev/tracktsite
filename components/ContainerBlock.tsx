import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ContainerBlock({children}: {children: ReactNode}){
    return (
        <Box bg={""}>
            <main>{children}</main>
        </Box>
    )
}