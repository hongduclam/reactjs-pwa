import React from "react";
import styled from "styled-components";

// https://fontawesome.com/icons

const SVG = styled.svg``;

export const FavouriteIcon = props => {
	return (
		<SVG
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="heart"
			class="svg-inline--fa fa-heart fa-w-16"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
			/>
		</SVG>
	);
};

export const TrashIcon = props => {
	return (
		<SVG
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="trash-alt"
			class="svg-inline--fa fa-trash-alt fa-w-14"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
			/>
		</SVG>
	);
};

export const EditIcon = props => {
	return (
		<SVG
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="pen"
			class="svg-inline--fa fa-pen fa-w-16"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
			/>
		</SVG>
	);
};

export const PlusIcon = props => {
	return (
		<SVG
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="plus"
			class="svg-inline--fa fa-plus fa-w-14"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
			/>
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
			class="svg-inline--fa fa-search fa-w-16"
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
		<SVG
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="chevron-left"
			class="svg-inline--fa fa-chevron-left fa-w-10"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
			/>
		</SVG>
	);
};

export const CloseIcon = props => {
	return (
		<SVG
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="times"
			class="svg-inline--fa fa-times fa-w-11"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 352 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
			/>
		</SVG>
	);
};
