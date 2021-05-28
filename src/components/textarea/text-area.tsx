import React from 'react';
import classNames from 'classnames';
import { isString as _isString } from 'lodash';

export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement>{
	text: string;
	error?: string;
	name?: string;
	value?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{ text, value, onChange, error, placeholder, name, className, onFocus, onBlur },
		ref
	) => {
		return (
			<div className={classNames('w-full px-3', className)}>
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-right">
					{text}
				</label>
				<textarea
					onFocus={onFocus}
					onBlur={onBlur}
					className={classNames(
						'appearance-none block resize-none w-full h-40 bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
						{ 'border-red-500 focus:border-red-500': _isString(error) }
					)}
					value={value}
					ref={ref}
					onChange={onChange}
					name={name}
					placeholder={placeholder}
				/>
				{_isString(error) ? (
					<p className="mt-1 text-red-500 text-xs italic">{error}</p>
				) : null}
			</div>
		);
	}
);

export default TextArea;
