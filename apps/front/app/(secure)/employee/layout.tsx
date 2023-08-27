export default function EmployeeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section  className="bg-success-900 h-[300px]">
			<div className="max-w-screen-2xl px-7">
				{children}
			</div>
		</section>
	);
}
