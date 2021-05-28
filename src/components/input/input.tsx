import React from 'react';
import classNames from 'classnames';
import { isString as _isString } from 'lodash';

interface Props extends React.HTMLAttributes<HTMLInputElement>{
	type?: string;
	value?: string;
	text?: string;
	error?: string;
	name?: string;
	info?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
	({ text, placeholder, error, name, type, info, className, value, onChange }, ref) => {
		return (
			<div className={classNames('w-full px-3 h-16', { 'h-24': text }, className)}>
				<label className="block uppercase tracking-wide text-right text-gray-700 text-xs font-bold mb-2">
					{text}
				</label>
				<input
					className={classNames(
						'appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
						{ 'border-red-500 focus:border-red-500': _isString(error) }
					)}
					ref={ref}
					name={name}
					type={type || ''}
					onChange={onChange}
					value={value}
					placeholder={placeholder}
				/>
				{info && <span className="text-xs text-gray-400 mt-2">{info}</span>}
				{_isString(error) ? (
					<p className="mt-1 text-red-500 text-xs italic">{error}</p>
				) : null}
			</div>
		);
	}
);

export default Input;
