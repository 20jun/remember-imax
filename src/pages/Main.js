import React, { useState } from 'react';
import styled from 'styled-components';

function Main() {
	const seatNumber = [];

	for (let i = 1; i <= 45; i++) {
		if (i === 1 || i === 2) {
			console.log(i);
		}
		seatNumber.push(i);
	}

	const test = seatNumber.map((arg, index) => {
		if (arg === 1 || arg === 2) {
			return (
				<Seat style={{ visibility: 'hidden' }} key={index}>
					{arg}
				</Seat>
			);
		}
	});

	return (
		<>
			<MainContainer>
				<Header>Header</Header>
				<div style={{ display: 'flex' }}>{test}</div>
				<Content>
					{/* A 열 */}
					<Row>
						<Left>
							<Seat onClick={() => console.log('click!')}>1</Seat>
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
	margin: 50%;
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
