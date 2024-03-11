export default function Layout({children} : {children: React.ReactNode}) {
    return (
        <>
            <div className="my-1 text-center">
                hello from auth layout
            </div>
            {children}
        </>
    )
}