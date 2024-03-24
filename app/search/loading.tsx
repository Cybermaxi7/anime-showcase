import Image from "next/image";

export default function Loader() {
  return (
    <section className="flex justify-center items-center w-full mt-10">
    <div>
        <Image
            src="/spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
        />
    </div>
</section>
  )
}