export default function BlogThree(){
    return(
        <div className="flex flex-col p-10">
            <img src="data:image/jpeg;base64,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" className="h-96 w-96 rounded-xl"/>
            <h1 className="text-3xl my-10 font-bold">Building a Personal Portfolio Website with Next.js</h1>
            <p className="text-xl">Learn how to create a professional portfolio using Next.js. This tutorial walks through setting up a dynamic page, adding animations, and optimizing for SEO.</p>
        </div>
    )
}