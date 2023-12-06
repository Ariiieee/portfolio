import ContainerLayout from "./components/ContainerLayout"
import Image from "next/image"
import ProfilePic from "../public/images/profile/developer2.png"
import AnimatedText from "./components/text/AnimatedText";
import Link from "next/link"
import { IoMdDownload } from "react-icons/io"
import { HiOutlineMail } from "react-icons/hi"

export default function Home() {

	return (
		<main className="flex items-center text-dark w-full bg-light min-h-screen">
			<ContainerLayout className="pt-0">
				<div className="flex items-center justify-between w-full">
					<div className="pl-48 w-1/2" >
						<Image src={ProfilePic} alt="developer image" className="w-580 h-auto object-contain" />
					</div>
					<div className="w-1/2 flex flex-col items-center self-center">
						<AnimatedText text="Turning Vision into Reality with Code and Design." className="!text-6xl !text-left" />

						<p className="my-4 text-base font-medium">As a skilled Frontend developer, I am dedicated to turning Ideas into Innovative Web applications.
							Explore my latest projects, showcasing my expertise in React.js and web development
						</p>
						<div className="mt-2 flex items-center self-start">
							<Link
								href="/od.pdf" target={"_blank"}
								className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
								download={true}
							>
								Resume
								<IoMdDownload className="w-6 ml-1" />
							</Link>

							<Link
								href="mailto:oluwafunmilayodada2018@gmail.com"
								target={"_blank"}
								className="ml-4 underline flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-medium hover:font-semibold "
							>
								Contact
								<HiOutlineMail className="w-6 ml-1" />
							</Link>
						</div>
					</div>
				</div>
			</ContainerLayout>
		</main>
	);
}
