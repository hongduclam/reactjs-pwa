import React from "react";
import styled from "styled-components";

// https://fontawesome.com/icons

const SVG = styled.svg`
	color: ${props => props.color};
	display: inline-block;
`;

export const FavouriteIcon = props => {
	return (
		<SVG width="22px" height="21px" viewBox="0 0 22 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-140.000000, -880.000000)" fill="#000000" fillRule="nonzero">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="heart" transform="translate(62.000000, 4.000000)">
							<path
								d="M14.5,-0.8 C18.0308111,-0.8 20.8,2.03072647 20.8,5.62222222 C20.8,6.89594882 20.4710968,8.12333479 19.8204404,9.36727829 C18.6308669,11.6415389 17.039223,13.3184632 11.9938813,18.0002353 L11.4249646,18.5276494 C10.6328508,19.2619784 9.3680135,19.2627796 8.57503538,18.5276494 L8.00583812,17.9999751 C2.96077705,13.3184632 1.36913307,11.6415389 0.17955956,9.36727829 C-0.471096845,8.12333479 -0.8,6.89594882 -0.8,5.62222222 C-0.8,2.03072647 1.96918894,-0.8 5.5,-0.8 C7.15645567,-0.8 8.77768652,-0.142620978 10,0.976560214 C11.2223135,-0.142620978 12.8435443,-0.8 14.5,-0.8 Z M9.38632446,2.6445607 C8.42761141,1.49820963 6.97189389,0.8 5.5,0.8 C2.86081106,0.8 0.8,2.90660687 0.8,5.62222222 C0.8,6.62532346 1.0615633,7.60141359 1.59732688,8.6257017 C2.66522246,10.667335 4.21037539,12.2952772 9.09388133,16.8268758 L9.66279804,17.35429 C9.84183433,17.5202655 10.158382,17.520065 10.337202,17.35429 L10.9058381,16.827136 C15.7896246,12.2952772 17.3347775,10.667335 18.4026731,8.6257017 C18.9384367,7.60141359 19.2,6.62532346 19.2,5.62222222 C19.2,2.90660687 17.1391889,0.8 14.5,0.8 C13.0281061,0.8 11.5723886,1.49820963 10.6136755,2.6445607 L10,3.37834399 L9.38632446,2.6445607 Z"
								id="Shape"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};

export const FavouriteActiveIcon = props => {
	return (
		<SVG width="22px" height="21px" viewBox="0 0 22 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-199.000000, -880.000000)" fill="red" fillRule="nonzero">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="heart-filled" transform="translate(120.000000, 3.000000)">
							<path
								d="M15.5,0.2 C19.0308111,0.2 21.8,3.03072647 21.8,6.62222222 C21.8,7.89594882 21.4710968,9.12333479 20.8204404,10.3672783 C19.6308669,12.6415389 18.039223,14.3184632 12.9938813,19.0002353 L12.4249646,19.5276494 C11.6328508,20.2619784 10.3680135,20.2627796 9.57503538,19.5276494 L9.00583812,18.9999751 C3.96077705,14.3184632 2.36913307,12.6415389 1.17955956,10.3672783 C0.528903155,9.12333479 0.2,7.89594882 0.2,6.62222222 C0.2,3.03072647 2.96918894,0.2 6.5,0.2 C8.15645567,0.2 9.77768652,0.857379022 11,1.97656021 C12.2223135,0.857379022 13.8435443,0.2 15.5,0.2 Z"
								id="Shape"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};

export const TrashIcon = props => {
	return (
		<SVG width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-262.000000, -880.000000)" fill="#000000" fillRule="nonzero">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="trash-bin" transform="translate(183.000000, 3.000000)">
							<path
								d="M4.19148936,4.21428571 L4.19148936,18.1807022 C4.19148936,18.5146787 4.45779373,18.7857143 4.78732987,18.7857143 L15.2126701,18.7857143 C15.5405417,18.7857143 15.8085106,18.5132442 15.8085106,18.1807022 L15.8085106,4.21428571 L4.19148936,4.21428571 Z M3,3 L17,3 L17,18.1807022 C17,19.1854726 16.1970155,20 15.2126701,20 L4.78732987,20 C3.80021484,20 3,19.1857819 3,18.1807022 L3,3 Z"
								id="Rectangle-14"
							/>
							<path
								d="M0.625,4 C0.279822031,4 0,3.77614237 0,3.5 C0,3.22385763 0.279822031,3 0.625,3 L19.375,3 C19.720178,3 20,3.22385763 20,3.5 C20,3.77614237 19.720178,4 19.375,4 L0.625,4 Z"
								id="Path-19"
							/>
							<path
								d="M8.2173913,2.76923077 L12.7826087,2.76923077 L12.7826087,2 C12.7826087,1.57636615 12.4411042,1.23076923 12.0221492,1.23076923 L8.97785079,1.23076923 C8.55849945,1.23076923 8.2173913,1.57557198 8.2173913,2 L8.2173913,2.76923077 Z M7,2 C7,0.8954305 7.88655484,0 8.97785079,0 L12.0221492,0 C13.114486,0 14,0.897678077 14,2 L14,4 L7,4 L7,2 Z"
								id="Rectangle-15"
							/>
							<path
								d="M6,6.62920568 C6,6.28170498 6.22385763,6 6.5,6 C6.77614237,6 7,6.28170498 7,6.62920568 L7,16.3707943 C7,16.718295 6.77614237,17 6.5,17 C6.22385763,17 6,16.718295 6,16.3707943 L6,6.62920568 Z"
								id="Path-20"
							/>
							<path
								d="M10,7.60080109 C10,7.26898781 10.2238576,7 10.5,7 C10.7761424,7 11,7.26898781 11,7.60080109 L11,15.3991989 C11,15.7310122 10.7761424,16 10.5,16 C10.2238576,16 10,15.7310122 10,15.3991989 L10,7.60080109 Z"
								id="Path-20"
							/>
							<path
								d="M13,6.62920568 C13,6.28170498 13.2238576,6 13.5,6 C13.7761424,6 14,6.28170498 14,6.62920568 L14,16.3707943 C14,16.718295 13.7761424,17 13.5,17 C13.2238576,17 13,16.718295 13,16.3707943 L13,6.62920568 Z"
								id="Path-20"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};

export const EditIcon = props => {
	return (
		<SVG width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-321.000000, -881.000000)" fill="#000000" fillRule="nonzero">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="pen" transform="translate(242.000000, 4.000000)">
							<path
								d="M2.81975421,10.6973911 L14.4008213,0.427842326 C14.9981645,-0.10185374 15.9011049,-0.0319626487 16.4087518,0.583002818 L19.4589502,4.27802525 C19.9623608,4.88785889 19.8740419,5.78752061 19.2625997,6.28813365 L6.83562037,16.462616 C6.37533853,16.8394678 5.5805689,17.1483818 4.98794326,17.1806404 L0.887869623,17.4038211 C0.318919471,17.4347909 -0.0651447351,16.911687 0.140724061,16.3771444 L1.71522495,12.2889201 C1.91811573,11.76211 2.3966602,11.0725711 2.81975421,10.6973911 Z M4.92582569,16.0394726 C5.27595103,16.0204141 5.83894895,15.801586 6.11162367,15.5783359 L18.538603,5.40385359 C18.6604919,5.3040581 18.6778684,5.12705136 18.5775921,5.00557618 L15.5273937,1.31055375 C15.4317704,1.19471525 15.2724608,1.18238407 15.1590735,1.28293058 L3.57800649,11.5524794 C3.2916689,11.8063902 2.91886316,12.3435692 2.78172137,12.6996607 L1.42200312,16.2301974 L4.92582569,16.0394726 Z"
								id="Path-14"
							/>
							<polygon
								id="Path-15"
								points="11.7887868 3.78077964 12.6637727 3.04557748 16.5988646 7.72884681 15.7238787 8.46404897"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};

export const PlusIcon = props => {
	return (
		<SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-79.000000, -877.000000)" fill="white" fillRule="nonzero">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="add">
							<path
								d="M10.4761905,0.686596472 C10.4761905,0.307399711 10.9452255,1.52455042e-16 11.5238095,0 C12.1023935,-1.52455042e-16 12.5714286,0.307399711 12.5714286,0.686596472 L12.5714286,22.3610226 C12.5714286,22.7402193 12.1023935,23.047619 11.5238095,23.047619 C10.9452255,23.047619 10.4761905,22.7402193 10.4761905,22.3610226 L10.4761905,0.686596472 Z"
								id="Path-3"
							/>
							<path
								d="M0.670430177,12.5714286 C0.300161815,12.5714286 1.26535593e-15,12.1023935 0,11.5238095 C-1.26535593e-15,10.9452255 0.300161815,10.4761905 0.670430177,10.4761905 L22.3771889,10.4761905 C22.7474572,10.4761905 23.047619,10.9452255 23.047619,11.5238095 C23.047619,12.1023935 22.7474572,12.5714286 22.3771889,12.5714286 L0.670430177,12.5714286 Z"
								id="Path-3"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};

export const SearchIcon = props => {
	return (
		<SVG
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="search"
			className="svg-inline--fa fa-search fa-w-16"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
			/>
		</SVG>
	);
};

export const BackIcon = props => {
	return (
		<SVG width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-612.000000, -881.000000)" fill="#000000">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="back" transform="translate(533.000000, 4.000000)">
							<polygon
								id="Path-2"
								points="0 6.66746064 6.66746064 0 7.54142936 0.873968718 1.74793744 6.66746064 7.54142936 12.4609526 6.66746064 13.3349213"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};

export const CloseIcon = props => {
	return (
		<SVG width="20px" height="23px" viewBox="0 0 20 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-444.000000, -879.000000)" fill="#000000" fillRule="nonzero">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="close" transform="translate(365.000000, 2.000000)">
							<path
								d="M18.9819608,0.192999025 C19.1945109,-0.0431580611 19.5621418,-0.0657198282 19.8030875,0.142605908 C20.0440332,0.350931644 20.0670524,0.711256165 19.8545024,0.947413252 L1.01803916,21.8759665 C0.805489147,22.1121236 0.437858227,22.1346853 0.196912519,21.9263596 C-0.0440331889,21.7180339 -0.0670524471,21.3577094 0.145497567,21.1215523 L18.9819608,0.192999025 Z"
								id="Path-2"
							/>
							<path
								d="M0.145497567,0.947413252 C-0.0670524471,0.711256165 -0.0440331889,0.350931644 0.196912519,0.142605908 C0.437858227,-0.0657198282 0.805489147,-0.0431580611 1.01803916,0.192999025 L19.8545024,21.1215523 C20.0670524,21.3577094 20.0440332,21.7180339 19.8030875,21.9263596 C19.5621418,22.1346853 19.1945109,22.1121236 18.9819608,21.8759665 L0.145497567,0.947413252 Z"
								id="Path-2"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};

export const CheckIcon = props => {
	return (
		<SVG width="22px" height="17px" viewBox="0 0 22 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-503.000000, -881.000000)" fill="#000000" fillRule="nonzero">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="check" transform="translate(424.000000, 4.000000)">
							<path
								d="M6.76013632,15.3010109 L21.0174686,0.175208325 C21.2049769,-0.0237219022 21.5506609,-0.0584205101 21.7895754,0.0977068156 C22.0284899,0.253834141 22.0701628,0.541665159 21.8826545,0.740595386 L7.34194066,16.1670414 C7.01387665,16.5150891 6.41517773,16.4986057 6.11452032,16.1350474 L0.0970419479,8.85864365 C-0.0752021312,8.65036414 -0.0120526263,8.36525726 0.238090315,8.22183961 C0.488233256,8.07842196 0.83064559,8.13100288 1.00288967,8.3392824 L6.76013632,15.3010109 Z"
								id="Path"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};

export const DrowDownIcon = props => {
	return (
		<SVG
			width="14px"
			height="8px"
			viewBox="0 0 14 8"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Form-component" transform="translate(-562.000000, -885.000000)" fill="#000000">
					<g id="Icons" transform="translate(79.000000, 877.000000)">
						<g id="dropdown" transform="translate(483.000000, 8.000000)">
							<polygon
								id="Path-4"
								points="0 0.845939036 6.80530489 7.65124393 13.6106098 0.845939036 12.7646707 0 6.80530489 5.95936586 0.845939036 0"
							/>
						</g>
					</g>
				</g>
			</g>
		</SVG>
	);
};
