import React, { useState } from 'react';
import styled from 'styled-components';

import moment from 'moment';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Controller, useForm } from 'react-hook-form';

import { InputLabel, MenuItem, Select, Stack } from '@mui/material';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import 'react-datepicker/dist/react-datepicker.css';

function Main() {
	const {
		register,
		handleSubmit,
		watch,
		control,
		getValues,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			// example: 'hihi',
			TextField: '선택한 좌석 번호',
			MUIPicker: moment(new Date()).format('YYYY-MM-DD'),
			Select: 'feel',
			memo: '',
		},
	});

	console.log(getValues());
	const onSubmit = data => {
		console.log(getValues());
		// setOpenModal(false);
	};

	const [openModal, setOpenModal] = useState(true);

	const handleClickOpen = e => {
		setOpenModal(true);
	};

	const handleClose = e => {
		setOpenModal(false);
	};

	const seatNumber = [];

	for (let i = 1; i <= 45; i++) {
		seatNumber.push(i);
	}

	const test = seatNumber.map((arg, index) => {
		return (
			<>
				<Seat style={{ display: 'flex' }}>{arg}</Seat>
			</>
		);
	});

	console.log(test);

	return (
		<>
			{test}
			{/* <form onSubmit={handleSubmit(onSubmit)}> */}
			<MainContainer>
				<Header>Header</Header>
				<div style={{ display: 'flex' }}>{test}</div>
				<Content>
					{/* A 열 */}
					<Row>
						<Left>
							<Seat onClick={handleClickOpen}>1</Seat>
							<Seat>2</Seat>
							<Seat>3</Seat>
							<Seat>4</Seat>
							<Seat>5</Seat>
							<Seat>6</Seat>
							<Seat>7</Seat>
							<Seat>8</Seat>
							<Seat>9</Seat>
							<Seat>10</Seat>
							<Seat>11</Seat>
							<Seat>12</Seat>
							<Seat>13</Seat>
							<Seat>14</Seat>
							<Seat>15</Seat>
						</Left>
						<Center>
							<Seat>16</Seat>
							<Seat>17</Seat>
							<Seat>18</Seat>
							<Seat>19</Seat>
							<Seat>20</Seat>
							<Seat>21</Seat>
							<Seat>22</Seat>
							<Seat>23</Seat>
							<Seat>24</Seat>
							<Seat>25</Seat>
							<Seat>26</Seat>
							<Seat>27</Seat>
							<Seat>28</Seat>
							<Seat>29</Seat>
							<Seat>30</Seat>
						</Center>
						<Right>
							<Seat>31</Seat>
							<Seat>32</Seat>
							<Seat>33</Seat>
							<Seat>34</Seat>
							<Seat>35</Seat>
							<Seat>36</Seat>
							<Seat>37</Seat>
							<Seat>38</Seat>
							<Seat>39</Seat>
							<Seat>40</Seat>
							<Seat>41</Seat>
							<Seat>42</Seat>
							<Seat>43</Seat>
						</Right>
					</Row>
					{/* B 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* C 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* D 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* E 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* F 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* G 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* H 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* I 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* J 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* K 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* L 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* M 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* N 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* O 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
					{/* P 열 */}
					<Row>
						<Seat>1</Seat>
						<Seat>2</Seat>
						<Seat>3</Seat>
						<Seat>4</Seat>
						<Seat>5</Seat>
						<Seat>6</Seat>
						<Seat>7</Seat>
						<Seat>8</Seat>
						<Seat>9</Seat>
						<Seat>10</Seat>
						<Seat>11</Seat>
						<Seat>12</Seat>
						<Seat>13</Seat>
						<Seat>14</Seat>
						<Seat>15</Seat>
						<Seat>16</Seat>
						<Seat>17</Seat>
						<Seat>18</Seat>
						<Seat>19</Seat>
						<Seat>20</Seat>
						<Seat>21</Seat>
						<Seat>22</Seat>
						<Seat>23</Seat>
						<Seat>24</Seat>
						<Seat>25</Seat>
						<Seat>26</Seat>
						<Seat>27</Seat>
						<Seat>28</Seat>
						<Seat>29</Seat>
						<Seat>30</Seat>
						<Seat>31</Seat>
						<Seat>32</Seat>
						<Seat>33</Seat>
						<Seat>34</Seat>
						<Seat>35</Seat>
						<Seat>36</Seat>
						<Seat>37</Seat>
						<Seat>38</Seat>
						<Seat>39</Seat>
						<Seat>40</Seat>
						<Seat>41</Seat>
						<Seat>42</Seat>
						<Seat>43</Seat>
					</Row>
				</Content>
				{/* <Footer>Footer</Footer> */}
			</MainContainer>
			<Dialog open={openModal} onClose={handleClose}>
				<DialogTitle>메모</DialogTitle>
				<DialogContent>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="stretch"
						spacing={2}
						onSubmit={handleSubmit(onSubmit)}
					>
						<DialogContentText>후기를 작성해주세요.</DialogContentText>
						<Controller
							name="TextField"
							control={control}
							render={({ field }) => (
								<TextField
									label="좌석"
									InputProps={{
										readOnly: true,
									}}
									{...field}
								/>
							)}
						/>
						<LocalizationProvider dateAdapter={AdapterMoment}>
							<Controller
								name="MUIPicker"
								control={control}
								render={({ field: { value, ...field } }) => {
									console.log(value);
									return (
										<DatePicker
											value={value}
											label="날짜 선택"
											inputFormat="YYYY-MM-DD"
											renderInput={params => <TextField {...params} />}
											onChange={selectedDate =>
												setValue('MUIPicker', moment(selectedDate).format('YYYY-MM-DD'))
											}
										/>
									);
								}}
							/>
						</LocalizationProvider>

						<Controller
							name="Select"
							control={control}
							render={({ field: { value, onChange, ...field } }) => {
								console.log(field);
								console.log('value', value);
								return (
									<Select {...field} value={value} onChange={onChange}>
										<MenuItem value={'feel'}>자리는 어떠셨나요</MenuItem>
										<MenuItem value={'good'}>좋아요</MenuItem>
										<MenuItem value={'soso'}>보통이에요</MenuItem>
										<MenuItem value={'bad'}>별로에요</MenuItem>
									</Select>
								);
							}}
						/>

						<Controller
							render={({ field: { onChange, value, ...field } }) => (
								<TextField
									{...field}
									onChange={onChange}
									label="메모"
									multiline
									rows={4}
									placeholder="간단한 후기를 작성해주세요"
								/>
							)}
							name="memo"
							control={control}
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>취소</Button>
					<Button onClick={onSubmit}>저장</Button>
				</DialogActions>
			</Dialog>
			{/* </form> */}
		</>
	);
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.div`
	/* text-align: center; */
	font-size: 50px;
	font-weight: 500;
	margin: 50px;
	background-color: ivory;
`;

const Content = styled.div`
	/* background-color: gray; */
	margin: 20%;
	/* display: flex; */
`;

const Footer = styled.div`
	background-color: pink;
`;

const Row = styled.div`
	display: flex;
	/* flex-direction: column; */
`;

const Seat = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 15px;
	font-size: 10px;
	text-align: center;
	background-color: #333;
	color: white;
	margin: 1px;
	cursor: pointer;
`;

const Left = styled.div`
	background-color: khaki;
	display: flex;
`;

const Center = styled.div`
	background-color: red;
	display: flex;
`;

const Right = styled.div`
	background-color: blue;
	display: flex;
`;

export default Main;
