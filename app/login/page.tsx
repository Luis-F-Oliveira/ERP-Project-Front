import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Forms } from './forms'

export default async function Page() {
    return (
        <Card className='w-1/4'>
            <CardHeader className='text-center'>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <Forms />
            </CardContent>
        </Card>
    )
}
