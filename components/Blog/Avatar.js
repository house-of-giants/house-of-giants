import Image from 'next/image';

const Avatar = ({ name, picture, date }) => {
	const formatDate = new Date(date);
	return (
		<div className="flex justify-center md:justify-start items-center">
			<Image src={picture} width="40" height="40" className="w-12 h-12 object-cover rounded-full mr-4" alt={name} />
			<div>
				<div className="text-xl font-bold">{name}</div>
				<time dateTime={date}>{formatDate.toDateString()}</time>
			</div>
		</div>
	);
};

export default Avatar;
